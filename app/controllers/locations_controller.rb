class LocationsController < ApplicationController

    def index
        location = Location.all
        render json: location
    end
end
