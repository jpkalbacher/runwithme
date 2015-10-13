class StaticPagesController < ApplicationController
  before_action :verify_user

  def root
  end
end
