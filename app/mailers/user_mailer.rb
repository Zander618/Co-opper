class UserMailer < ApplicationMailer
  def reset(user)
    @user = user
    @token = user.signed_id(purpose: "password_reset", expires_in: 15.minutes)
    mail to: user.email
  end
end
