class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release, :ign_rating, :overview, :image_url, :platform, :played
end
