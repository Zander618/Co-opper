class ReviewsController < ApplicationController
  
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id: params[:id])
    if review
      render json: review
    else
      render json: { error: "Review not found"}, status: :not_found
    end
  end

  def create
    review = Review.create(review_params)
    if @current_user
    render json: review, status: :created
    else
      render json: { error: "Unable to create" }, status: :unprocessable_entity
    end
  end

  def update
    review = Review.find_by(id: params[:id])
    if review.user_id == @current_user.id
      review.update(review_params)
      render json: review
    else
      render json: {error: "Review Not Found"}, status: :not_found
    end
  end


  def destroy
    review = Review.find_by(id: params[:id])
    if review.user_id == @current_user.id
      review.destroy
      head:no_content
    end
  end

  private

  def review_params
    params.permit(:user_id, :game_id, :review, :rating)
  end

end

