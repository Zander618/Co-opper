class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating

  belongs_to :game
  belongs_to :user
end
