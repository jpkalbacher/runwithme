Rails.application.routes.draw do

  root to: 'sessions#new'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]

end
