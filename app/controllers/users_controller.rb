class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user
      user.update(user_params)
      render json: user
    else
      render json: {error: "Review Not Found"}, status: :not_found
    end
  end

  def show
    render json: @current_user
  end

  def favorite_game
    user = @current_user
    top_reviews = user.reviews.order(rating: :desc)
    fav_game = top_reviews.first.game
    render json: fav_game
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :email)
  end
  
end
