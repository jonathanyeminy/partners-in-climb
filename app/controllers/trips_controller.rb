class TripsController < ApplicationController
    
    def index
        trip = Trip.all
        render json: trip
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def new
        trip = Trip.new
    end

    def create
        trip = Trip.new(trip_params)

        if trip.save
            trip.ClimberTrips.create!(
                climber: current_user,
                organizer: true
            ) 
       else
        #handle form error
       end
    end

    private
        def trip_params
            params.require(:trip).permit(
                :name,
                :rating,
                :password_digest
            )
        end
end
