class AddPublicToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :public, :boolean
  end
end
