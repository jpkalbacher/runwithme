json.array! @users do |user|
  json.extract! user, :id, :display_name, :profile_photo_url, :cover_photo_url
  json.followee user.followed_by?(current_user)
end
