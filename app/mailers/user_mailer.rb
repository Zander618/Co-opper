class UserMailer < ApplicationMailer
  def reset_password_email(user)
    @user = user
    @reset_password_url = url_for(controller: 'password_resets', action: 'edit', token: @reset_password_token)

    mail(to: @user.email, subject: 'Reset Your Password')
  end
end
