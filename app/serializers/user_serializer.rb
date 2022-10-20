class UserSerializer < ActiveModel::Serializer
  attributes  :username

  has_many :reviews
  has_many :games, through: :reviews
end
