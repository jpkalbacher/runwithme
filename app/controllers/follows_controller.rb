class FollowsController < ApplicationController
  def create
    follow = Follow.new(follow_params)
    follow.follower_id = current_user.id
    follow.save
    follower = current_user
    followee = User.find_followee(follow_params[:followee_id], follower)
    render json: followee
  end

  def destroy
    follow = Follow.find_by_followee_id(follow_params[:followee_id])
    follow.delete
    follower = current_user
    followee = User.find_followee(follow_params[:followee_id], follower)
    render json: followee
  end

  private
  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
