class Follow < ActiveRecord::Base
  belongs_to :followee, class_name: "User"
  belongs_to :follower, class_name: "User"

  validates :followee, :follower, presence: true
  validates :follower, uniqueness: { scope: :followee }

  def find_by_followee_id(followee_id)
    Follow.where(follower_id: current_user.id).where(followee_id: followee_id)
  end
end
