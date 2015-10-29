class AddIndexToAttendees < ActiveRecord::Migration
  def change
    add_index :attendees, :user_id
    add_index :attendees, :activity_id
    add_index :attendees, [:user_id, :activity_id], :unique => true
  end
end
