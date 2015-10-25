json.array! @activities do |activity|
  json.extract! activity, :id, :owner_id, :activity_type, :start_time,
                          :location_description, :latitude, :longitude,
                          :canceled

  if activity.owner.profile_picture_url
    json.owner_picture_url JSON.parse(activity.owner.profile_picture_url)
  else
    photo_hash = Hash.new
    photo_hash['secure_url'] = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDbr8ORhk0NtbHp1sBm3KrlZSrCFQcWXG66CvqRD11e-oSroPVA'
    json.owner_picture_url photo_hash
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
