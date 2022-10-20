
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

  private

  def game_params
    params.permit(:name, :release, :ign_rating, :overview, :image_url, :platform, :played)
  end

end
