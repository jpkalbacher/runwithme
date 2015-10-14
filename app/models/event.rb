# == Schema Information
#
# Table name: events
#
#  id                   :integer          not null, primary key
#  start_time           :datetime         not null
#  owner_id             :integer          not null
#  latitude             :float            not null
#  longitude            :float            not null
#  location_description :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  event_type           :string
#

class Event < ActiveRecord::Base
  validates :start_time, :owner_id, :latitude, :longitude, :location_description,
    :event_type, presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id



  def self.in_bounds(bounds)
    north_east_lat = bounds["northEast"]["lat"].to_f
    north_east_lng = bounds["northEast"]["lng"].to_f
    south_west_lat = bounds["southWest"]["lat"].to_f
    south_west_lng = bounds["southWest"]["lng"].to_f

     in_bounds = Array.new

     events = Event.all

     events.each do |bench|
       if (event.latitude > south_west_lat && event.latitude < north_east_lat) &&
         (event.longitude < north_east_lng && event.longitude > south_west_lng)
         in_bounds << event
       end
     end

     in_bounds
  end
end
