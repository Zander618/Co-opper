class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :games, through: :reviews
  
  validates :username, uniqueness: true
  validates :username, presence: true
  validates :email, presence: true
end
