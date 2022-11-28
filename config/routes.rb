Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :games
  resources :reviews
  resources :users 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:name", to: "games#search"
  get "/ratings", to:"games#high_ratings"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

# Build a custom route which sends us to the games controller and returns all games 
# that have any reviews which received a rating of 9 or higher. 
# Send back the information as json.

# Games controller is goin to
# build action in games controller
#  find reviews higher than 9
# pull the game_ids from the found reviews
# with the array of game_ids map to return the array games