json.array! @activities do |activity|
  json.extract! activity, :id, :owner_id, :location_description, :latitude,
                          :longitude, :canceled, :description
  json.activity_type activity.activity_type.capitalize
  json.owner_picture_url activity.owner.profile_photo_url
  json.start_time activity.start_time.strftime("%A, %d %b %Y %l:%M %p")
  if activity.attendees
    attendees_array = []
    activity.attendees.each do |attendee|
      name = attendee.display_name
      photo = attendee.profile_photo_url
      attendees_array << {display_name: name, profile_photo_url: photo}
    end
    json.attendees attendees_array
  end
  if activity.owner_id == current_user.id
    json.owner 'currentUser'
  elsif activity.owner.followed_by?(current_user)
    json.owner 'followee'
  else
    json.owner 'other'
  end
  json.owner_name activity.owner.display_name
end
