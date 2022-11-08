Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :games
  resources :reviews
  resources :users 
  # resources :user_games

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:name", to: "games#search"

end
