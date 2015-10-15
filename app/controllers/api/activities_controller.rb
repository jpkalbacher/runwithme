class Api::ActivitiesController < ApplicationController
  def new
    @activity = Activity.new
  end

  def index
    @activities = Activity.all
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
  end

  def edit
  end

  def destroy
  end

  def show
    @activity = Activity.find(params[:id])
  end

  private
  def activity_params
    params.require(:new_activity).permit(:latitude, :longitude, :activity_type,
    :start_time, :location_description)
  end
end
