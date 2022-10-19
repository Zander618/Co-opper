class UserGamesController < ApplicationController

  def index
    user_games = UserGame.all
    render json: user_games
  end

  def show
    user_game = UserGame.find_by(id: params[:id])
    if user_game
      render json: user_game
    else
      render json: { error:"User_Game not found"}, status: :not_found
    end
  end
    
  def create
    user_game = UserGame.new(user_game_params)
    if user_game.save
      render json: user_game, status: :created
    else
      render json: user_game.errors, status: :unprocessable_entity
    end
  end

  def destroy
    user_game = UserGame.find_by(id: params[:id])
    user_game.destroy
    head :no_content
  end


  private

  def user_game_params
    params.require(:user_game).permit(:user_id, :game_id)
  end

end

