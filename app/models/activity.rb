# == Schema Information
#
# Table name: activities
#
#  id                   :integer          not null, primary key
#  start_time           :datetime         not null
#  owner_id             :integer          not null
#  latitude             :float            not null
#  longitude            :float            not null
#  location_description :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  activity_type        :string
#  canceled             :boolean          default(FALSE), not null
#

class Activity < ActiveRecord::Base
  validates :start_time, :owner_id, :latitude, :longitude, :location_description,
    :activity_type, presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  def self.in_bounds(bounds)
    north_west_lat = bounds["northWest"]["lat"].to_f
    north_west_lng = bounds["northWest"]["lng"].to_f
    south_east_lat = bounds["southEast"]["lat"].to_f
    south_east_lng = bounds["southEast"]["lng"].to_f

    in_bounds = Array.new

    activities = Activity.where('start_time > ?', Time.now).where(canceled: false)

    activities.each do |activity|
      if (activity.latitude > south_east_lat && activity.latitude < north_west_lat) &&
        (activity.longitude > north_west_lng || activity.longitude < south_east_lng)
        in_bounds << activity
      end
    end
    in_bounds
  end
end
