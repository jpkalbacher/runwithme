class Api::EventsController < ApplicationController
  def new
    @event = Event.new
  end

  def index
    @events = Event.all
  end

  def create
    event = current_user.events.new(event_params)

    if event.save
      render json: {}
    else
      flash[:errors] = event.errors.full_messages
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def show
  end

  private
  def event_params
    params.require(:new_event).permit(:latitude, :longitude, :event_type,
    :start_time, :location_description)
  end
end
