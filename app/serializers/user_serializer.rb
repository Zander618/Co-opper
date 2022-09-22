class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :user_games
  has_many :games, through: :user_games
  has_many :reviews
end
