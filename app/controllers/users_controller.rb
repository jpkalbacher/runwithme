class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.display_name = @user.first_name.downcase.capitalize + " " +
                            @user.last_name.downcase.capitalize

    if @user.save
      sign_in(@user)
      redirect_to :root
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    if params[:user][:search_fragment]
      @users = User.find_by_search_fragment(params[:user][:search_fragment]).includes(:followees)
    elsif params[:user][:all_followers]
      @users = current_user.find_followers
    elsif params[:user][:all_following]
      @users = current_user.followees
    end
    @users
  end

  def show
    user = User.find()
  end

  private
  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :email,
                                 :search_fragment)
  end
end
