class User < ApplicationRecord
  has_secure_password
  has_many :user_games
  
  validates :username, uniqueness: true
  validates :username, presence: true
end
