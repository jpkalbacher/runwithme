json.array! @activities do |activity|
  json.extract! activity, :id, :owner_id, :activity_type,
                          :location_description, :latitude, :longitude,
                          :canceled
  json.owner_picture_url activity.owner.profile_photo_url
  json.start_time activity.start_time.strftime("%A, %d %b %Y %l:%M %p")
  if activity.owner_id == current_user.id
    json.owner 'currentUser'
  elsif activity.owner.followed_by?(current_user)
    json.owner 'followee'
  else
    json.owner 'other'
  end
  json.owner_name activity.owner.display_name
end
