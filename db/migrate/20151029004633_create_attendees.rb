class CreateAttendees < ActiveRecord::Migration
  def change
    create_table :attendees do |t|
      t.integer :user_id, null: false
      t.integer :activity_id, null: false
      t.string :status


      t.timestamps null: false
    end
  end
end
