class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to :root
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
  end

  def update
  end

  def edit
  end

  def show

  end

  private
  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :email)
  end
end
