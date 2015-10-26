class AddProfilePhotoObjectToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_photo_object, :string
  end
end
