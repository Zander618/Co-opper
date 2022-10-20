class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release, :ign_rating, :overview, :image_url, :platform, :played

  has_many :reviews
  has_many users, through: :reviews
end
