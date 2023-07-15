class PasswordResetsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.find_by(email: params[:email])
    if user
      UserMailer.reset_password_email(user).deliver_now
      render json: { message: "Password reset email sent" }, status: :ok
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end
  end
end