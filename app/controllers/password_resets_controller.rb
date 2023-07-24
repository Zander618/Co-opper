class PasswordResetsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    @user = User.find_by(email: params[:email])
    if @user.present?
      UserMailer.reset(@user).deliver_later
      render json: { message: "Password reset email sent successfully." }, status: :ok
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end
  end
end