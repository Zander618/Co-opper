class UserMailer < ApplicationMailer
  def reset_password_email(user)
    @user = user
    @reset_password_token = SecureRandom.urlsafe_base64

    mail(to: @user.email, subject: 'Reset Your Password')
  end
end
