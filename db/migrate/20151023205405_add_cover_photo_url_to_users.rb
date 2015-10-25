class AddCoverPhotoUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :cover_photo_url, :string
  end
end
