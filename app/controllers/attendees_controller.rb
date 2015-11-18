class AttendeesController < ApplicationController
  def new
    @attendee = Attendee.new
  end

  def create
    attendee = Attendee.new(attendee_params)
    attendee.user_id = current_user.id
    attendee.save
    @activities = current_user.attending_activities
    render :index
  end

  def show
  end

  # attendees index only renders current activities current user is attending
  def index
    @activities = current_user.attending_activities
    render :index
  end

  private
  def attendee_params
    params.require(:attendee).permit(:activity_id)
  end
end
