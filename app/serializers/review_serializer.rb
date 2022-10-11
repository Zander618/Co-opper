class ReviewSerializer < ActiveModel::Serializer
  attributes [:id, :user_id, :game_id, :review, :rating]

end
