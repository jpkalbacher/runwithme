class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :activities, :event_type, :activity_type
  end
end
