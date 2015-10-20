Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :activities
  end

  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]
end
