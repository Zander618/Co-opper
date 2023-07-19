Rails.application.routes.draw do

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#show"

  resources :games
  resources :reviews
  resources :users 
  resources :password_resets, only: [:create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:name", to: "games#search"
  get "/ratings", to:"games#high_ratings"
  get "/favorite_game", to:"users#favorite_game"

  post "password/reset", to: "password_resets#create"
  get "password/reset/edit", to: "password_resets#edit"
  patch "password/reset/edit", to: "paasword_resets#update"
  

end

# part 1 find current users highest rated game (favorite game)
# part 2 automatically render users favorite game above listed games in gamelist component

# create a route called favorite_game
# in user controller order game by  highest rating return first
# fetch the route
#  display the route