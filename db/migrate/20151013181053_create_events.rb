class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :type, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.integer :owner_id, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :location_description, null: false

      t.timestamps null: false
    end

    add_index(:events, :owner_id)
  end
end
