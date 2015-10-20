class AddCanceledToActivities < ActiveRecord::Migration
  def change
    add_column :activities, :canceled, :boolean, :default => false, :null => false
  end
end
