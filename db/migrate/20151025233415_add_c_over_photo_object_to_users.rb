class AddCOverPhotoObjectToUsers < ActiveRecord::Migration
  def change
    add_column :users, :cover_photo_object, :string
  end
end
