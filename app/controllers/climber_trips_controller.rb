class ClimberTripsController < ApplicationController
    def index
        participants = ClimberTrips.all
        render json: participants
    end
end
