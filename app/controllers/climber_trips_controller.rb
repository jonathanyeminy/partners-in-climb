class ClimberTripsController < ApplicationController
    def index
        participants = ClimberTrip.all
        render json: participants
    end

    def destroy
        climberTrip = ClimberTrip.find_by(id: params[:id])
        climberTrip.destroy
    end
end
