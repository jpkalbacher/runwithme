class Api::ActivitiesController < ApplicationController
  before_action :verify_user

  def new
    @activity = Activity.new
  end

  def index
    if bounds
      @activities = Activity.includes(:owner, :attendees).in_bounds(bounds)
    else
      time = Time.now
      user_id = current_user.id
      @activities = Activity.find_by_sql(
        "(SELECT
            *
          FROM
            activities
          WHERE
            owner_id = #{user_id} AND start_time > '#{time}')
          UNION
            (SELECT
              activities.*
            FROM
              activities
            JOIN
              attendees ON activities.id = attendees.activity_id
            WHERE
              attendees.user_id = #{user_id} AND
              start_time > '#{time}')
          ORDER BY start_time ASC")
    end
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
    @activity = Activity.includes(:owner, :attendees).find(params[:id])
  end

  private
  def activity_params
    params.require(:activity).permit(:latitude, :longitude, :activity_type,
    :start_time, :location_description, :canceled, :description, :public)
  end

  def bounds
    params[:bounds]
  end
end
