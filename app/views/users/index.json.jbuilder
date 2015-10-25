json.array! @users do |user|
  json.extract! user, :id, :display_name
  json.followee user.followed_by?(current_user)

  if user.profile_picture_url
    json.profile_picture_url JSON.parse(user.profile_picture_url)
  else
    photo_hash = Hash.new
    photo_hash['secure_url'] = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDbr8ORhk0NtbHp1sBm3KrlZSrCFQcWXG66CvqRD11e-oSroPVA'
    json.profile_picture_url photo_hash
  end
end
