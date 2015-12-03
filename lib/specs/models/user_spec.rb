require 'rails_helper'

describe User do
  it "has a valid factory" do
    Factory.create(:user).should be_valid
  end

  it "is invalid without last name"
  it "is invalid without email name"
  it "is invalid without password_digest"
end
