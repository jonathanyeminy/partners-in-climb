class TripImagesController < ApplicationController
    def create
        tripImage = TripImage.create!(trip_image_params)
        render json: tripImage
    end

    private

    def trip_image_params
        params.permit(:id, :image_url)
    end
end