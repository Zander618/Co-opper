class Game < ApplicationRecord

  # def self.search(name)
  #   game =  Game.select{|game| game.name.include?(name)}
  #   game
  # end


  has_many :reviews
  has_many :users, through: :reviews
end
