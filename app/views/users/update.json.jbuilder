json.extract! @user, :id, :display_name

if @user.profile_picture_url
  json.profile_picture_url @user.profile_picture_url
else
  json.profile_picture_url 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDbr8ORhk0NtbHp1sBm3KrlZSrCFQcWXG66CvqRD11e-oSroPVA'
end
