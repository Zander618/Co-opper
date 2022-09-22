class User < ApplicationRecord
  has_secure_password
  has_many :user_games
  has_many :games, through: :user_games
  has_many :reviews
  
  validates :username, uniqueness: true
  validates :username, presence: true
end
