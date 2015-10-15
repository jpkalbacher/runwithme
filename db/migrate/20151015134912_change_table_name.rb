class ChangeTableName < ActiveRecord::Migration
  def change
    rename_table :events, :activities
  end
end
