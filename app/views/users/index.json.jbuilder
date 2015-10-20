json.array! @users do |user|
  json.extract! user, :id, :display_name
  json.followee user.followed_by?(current_user)
end
