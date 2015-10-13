class EventsController < ApplicationController
  def new
    @event = Event.new
  end

  def create
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
end
