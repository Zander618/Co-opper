
class GamesController < ApplicationController
  before_action :authorize

  #GET /games
  def index
    games = Game.all
    render json: games
  end

  #GET /game/1
  def show
    game = Game.find_by(id: params[:id])
    if game
      render json: game
    else
      render json: { error:"Game not found"}, status: :not_found
    end
  end

  def create
    game = Game.create(game_params)
    render json: game, status: :created
  end

  def search
    game = Game.find_by(name: params[:name])
    render json: game
  end

  def high_ratings
    reviews = Review.select{|review| review.rating > 9}
    hr_games = reviews.map{|r| r.game}
    render json: hr_games
  end

  # def destroy
  #   game = Game.find_by(id: params[:id])
  #     game.destroy
  #     head:no_content
  # end

  private

  def game_params
    params.permit(:name, :release, :ign_rating, :overview, :image_url, :platform)
  end

end
