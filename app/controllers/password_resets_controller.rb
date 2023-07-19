class PasswordResetsController < ApplicationController
  include ActionController::Cookies
  skip_before_action :authorize, only: [:create]

  def create
    @user = User.find_by(email: params[:email])
    if @user.present?
      UserMailer.with(user: @user).reset.deliver_later
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end

    redirect_to root_path, notice: "If an account with that email was found, we have sent a link to reset your password"
  end
end