# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  first_name          :string           not null
#  last_name           :string           not null
#  profile_picture_url :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :first_name, :last_name, :session_token,
    presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id"
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee
  has_many :activities, foreign_key: :owner_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_search_fragment(search_fragment)
    search_fragment = search_fragment.downcase
    results = self.where("LOWER(display_name) LIKE ?", "%#{search_fragment}%")
  end

  def followed_by?(user)
    followers.include?(user)
  end

  def find_followers
    followers
  end

  def self.find_followee(id, current_user)
    user = User.find(id)
    is_follower = user.followed_by?(current_user)
    followee = {id: user.id, display_name: user.display_name, followee: is_follower}
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
