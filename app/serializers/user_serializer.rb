class UserSerializer < ActiveModel::Serializer
  attributes  :username, :id, :email

  has_many :reviews
  has_many :games, through: :reviews
end
