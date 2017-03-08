Rails.application.routes.draw do
  # Root route

  root 'home#index'

  #devise routes
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Resource routes

  # Namespaced routes
  namespace :api do
    get 'user_info', to: 'users#info'

  end

  # GET routes

  # Post routes

  # PuT routes

  # Delete routes


  # NO ROUTES BELOW THIS LINE
  get '*unmatched_route', to: 'home#index'
end
