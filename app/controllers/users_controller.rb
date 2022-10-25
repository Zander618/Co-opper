class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def index
    users = User.all
    render json: users
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

  # remove index

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
  
end
