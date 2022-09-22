class UserGame < ApplicationRecord
  belongs_to :users
  belongs_to :games
end
