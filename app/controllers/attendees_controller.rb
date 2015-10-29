class AttendeesController < ApplicationController
  def new
    @attendee = Attendee.new
  end

  def create
    debugger;
    attendee = Attendee.new(attendee_params)
    attendee.user_id = current_user.id
    attendee.save
    render json: {}
  end

  def show
  end

  def index
  end

  private
  def attendee_params
    params.require(:attendee).permit(:activity_id)
  end
end
