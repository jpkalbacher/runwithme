class Api::ActivitiesController < ApplicationController
  before_action :verify_user
  def new
    @activity = Activity.new
  end

  def index
    @activities = Activity.includes(:owner).in_bounds(bounds)
  end

  def create
    @activity = current_user.activities.new(activity_params)
    if @activity.save
      render :show
    else
      flash[:errors] = activity.errors.full_messages
    end
  end

  def update
    activity = Activity.find(params[:activity][:id])
    if activity.update(activity_params)
      render json: {}
    else
      flash[:errors] = activity.errors.full_messages
    end
  end

  def show
    @activity = Activity.includes(:owner).find(params[:id])
  end

  private
  def activity_params
    params.require(:activity).permit(:latitude, :longitude, :activity_type,
    :start_time, :location_description, :canceled)
  end

  def bounds
    params[:bounds]
  end
end
