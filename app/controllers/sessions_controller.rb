class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    # debugger;
    # if params[:user][:email].empty && params[:user][:password].empty?
    #   user = User.find_by_credentials('guestuser@guest.user','password')
    #   sign_in(user)
    #   redirect_to root_url
    # end

    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
