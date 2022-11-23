class LocationsController < ApplicationController

    def index
        location = Location.all
        render json: location
    end

    def show
        location = Location.find_by(id: params[:id])

        if location
            render json: location, status: :ok
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    def create
        location = Location.create!(location_params)
        render json: location
    end

    private

    def location_params
        params.permit(:id, :name, :address, :image_url)
    end
end
