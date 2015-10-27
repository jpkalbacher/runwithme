class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.display_name = @user.first_name.downcase.capitalize + " " +
                            @user.last_name.downcase.capitalize
    @user.profile_photo_url = "http://res.cloudinary.com/dbw79utiw/image/upload/v1445805052/i6qkba2yfqaf6ziadxrp.jpg"
    @user.cover_photo_url = "https://res.cloudinary.com/dbw79utiw/image/upload/x_108,y_31,w_1879,h_1879,c_crop/v1445817847/swah17i9e0zdixwf5qpq.png"

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
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:password,
                                 :first_name,
                                 :last_name,
                                 :display_name,
                                 :id,
                                 :email,
                                 :search_fragment,
                                 :current_user,
                                 :profile_photo_url,
                                 :profile_photo_object,
                                 :cover_photo_url,
                                 :profile_photo_object
                                 )
  end
end
