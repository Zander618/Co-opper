class PasswordResetsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    @user = User.find_by(email: params[:email])
    if @user.present?
      UserMailer.with(user: @user).reset.deliver_later
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end
  end
end