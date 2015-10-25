json.extract! @user, :id, :display_name

if @user.profile_picture_url
  json.profile_picture_url JSON.parse(@user.profile_picture_url)
else
  photo_hash = Hash.new
  photo_hash['secure_url'] = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWDbr8ORhk0NtbHp1sBm3KrlZSrCFQcWXG66CvqRD11e-oSroPVA'
  json.profile_picture_url photo_hash
end

if @user.cover_photo_url
  json.cover_photo_url JSON.parse(@user.cover_photo_url)
else
  photo_hash = Hash.new
  photo_hash['secure_url'] = 'http://wallpapers55.com/wp-content/uploads/2013/11/very-dense-forest-on-the-mountain.jpg'
  json.cover_photo_url photo_hash
end
