class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false

      t.timestamps null: false
    end

    add_index "follows", ["followee_id", "follower_id"], name: "index_follows_on_followee_id_and_follower_id", unique: true, using: :btree
    add_index "follows", ["followee_id"], name: "index_follows_on_followee_id", using: :btree
    add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree
  end
end
