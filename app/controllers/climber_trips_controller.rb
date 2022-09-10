class ClimberTripsController < ApplicationController
    def index
        participants = ClimberTrips.all
        render json: ClimberTrips.all
    end
end
