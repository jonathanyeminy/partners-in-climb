class TripImagesController < ApplicationController
    def create
        params[:climber_id] = current_climber.id
        tripImage = TripImage.create!(trip_image_params)
        render json: tripImage
    end

    private

    def trip_image_params
        params.permit(:trip_id, :image_url, :climber_id)
    end
end