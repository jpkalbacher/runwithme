require 'rails_helper'

describe User do
  it "has a valid factory" do
    user = FactoryGirl.create(:user)
    expect(user).to be_valid
  end

  it "is invalid without first name" do
    user = FactoryGirl.build(:user, first_name: nil)
    expect(user).to be_invalid
  end

  it "is invalid without email" do
    user = FactoryGirl.build(:user, email: nil)
    expect(user).to be_invalid
  end
end
