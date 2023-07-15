class PasswordResetsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user
      # Generate and send the password reset email here
      # You can use a gem like `mail` or `action_mailer` to send the email
      # Include a unique token or URL in the email for password reset verification
      render json: { message: "Password reset email sent" }, status: :ok
    else
      render json: { errors: ["User not found"] }, status: :not_found
    end
  end
end