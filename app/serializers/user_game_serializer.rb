class UserGameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id

  belongs_to :games
  belongs_to :users
end
