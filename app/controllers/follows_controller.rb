class FollowsController < ApplicationController
  def create
    follow = Follow.new(follow_params)
    follow.follower_id = current_user.id
    followee_id = follow_params[:followee_id]
    follow.save
    render json: followee_id
  end

  def destroy
    follow = Follow.find_by_followee_id(follow_params[:followee_id])
    followee_id = follow_params[:followee_id]
    follow.delete
    render json: followee_id
  end

  private
  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
