class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release, :ign_rating, :overview, :image_url, :platform, :played

  has_many :user_games
  has_many :reviews
end
