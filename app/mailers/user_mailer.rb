class UserMailer < ApplicationMailer
  default from: # The email address you use to send out resetting password emails...

  def password_reset_email
    @user = params[:user]
    @token = params[:token]
    @url  = "http://localhost:4000/reset_password/#{@token}"
    mail(to: @user.email, subject: 'Password reset instructions')
  end  
  
end
