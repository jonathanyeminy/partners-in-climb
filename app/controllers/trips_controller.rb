class TripsController < ApplicationController
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
