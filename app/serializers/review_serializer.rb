class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :review, :rating

  belongs_to :games
  belongs_to :users
end
