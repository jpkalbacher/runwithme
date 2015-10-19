class Api::ActivitiesController < ApplicationController
  def new
    @activity = Activity.new
  end

  def index
    @activities = Activity.in_bounds(bounds)
  end

  def create
    activity = current_user.activities.new(activity_params)
    if activity.save
      render json: {}
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
    @activity = Activity.find(params[:id])
  end

  private
  def activity_params
    params.require(:activity).permit(:latitude, :longitude, :activity_type,
    :start_time, :location_description)
  end

  def bounds
    params[:bounds]
  end
end
