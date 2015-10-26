class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :profile_picture_url, :profile_photo_url
  end
end
