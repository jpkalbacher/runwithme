class EventsController < ApplicationController
  def new
    @event = Event.new
  end

  def create
    debugger;
    event = Event.new(event_params)
    event.owner_id = CURRENT_USER_ID

    if event.save
      render: "awesome!"
    else
      flash[:errors] = event.errors.full_messages
    end
  end

  def index
    @events = Event.all
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
    params.require(:event).permit(:latitude, :longitude, :event_type,
    :start_time, :location_description)
  end
end
