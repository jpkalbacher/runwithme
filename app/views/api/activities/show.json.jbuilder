json.extract! @activity, :id, :activity_type,
  :location_description, :latitude, :longitude, :description, :canceled
json.attendees @activity.attendees
json.owner @activity.owner
if @activity.attendees.include?(current_user)
  attending = true
else
  attending = false
end
json.attending attending
json.start_time @activity.start_time.strftime("%A, %d %b %Y %l:%M %p")
if @activity.owner_id == current_user.id
  json.owner 'currentUser'
elsif @activity.owner.followed_by?(current_user)
  json.owner 'followee'
else
  json.owner 'other'
end
json.owner_name @activity.owner.display_name
