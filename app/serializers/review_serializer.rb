class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :reviewer_username, :game_name

  belongs_to :game
  belongs_to :user

  def reviewer_username
    object.user.username
  end

  
  def game_name
    object.game.name
  end

end
