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
  validates :start_time, :owner_id, :latitude, :longitude, :location_description
    :event_type, presence: true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id


end
