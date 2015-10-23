json.array! @activities do |activity|
  json.extract! activity, :id, :owner_id, :activity_type, :start_time,
                          :location_description, :latitude, :longitude,
                          :canceled

  json.owner_profile_picture_url activity.owner.profile_picture_url
  if activity.owner_id == current_user.id
    json.owner 'currentUser'
  elsif activity.owner.followed_by?(current_user)
    json.owner 'followee'
  else
    json.owner 'other'
  end
  json.owner_name activity.owner.display_name
end
