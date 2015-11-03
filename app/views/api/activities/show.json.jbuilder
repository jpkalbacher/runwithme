json.extract! @activity, :id, :owner_id, :activity_type, :start_time,
  :location_description, :latitude, :longitude, :description
json.attendees @activity.attendees
