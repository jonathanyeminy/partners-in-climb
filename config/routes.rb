Rails.application.routes.draw do
  
  resources :gears
  resources :climber_trips
  resources :trips
  resources :locations
  resources :climbers

  get "/me", to: "sessions#show"
  post "/login", to: "sessions#create"
  patch "/climber-update", to:"sessions#update"
  delete "/logout", to: "sessions#destroy"
  patch "/add-climber-to-trip", to: "sessions#addClimber"
  patch "/add-gear-to-trip", to: "sessions#addGear"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
