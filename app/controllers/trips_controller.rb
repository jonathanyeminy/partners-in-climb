class TripsController < ApplicationController
    
    def index
        trips = Trip.all.order(date: :asc)
        render json: TripSerializer.new(trips).serialized_json
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
        if trip.save!
            trip.climber_trips.create!(
                climber: current_climber,
                organizer: true
            ) 
            render json: trip, status: :ok

        end
    end
  
    private
        def trip_params
            params.require(:trip).permit(
                :name,
                :date,
                :location_id
            )
            # params.permit(:name, :date, :location)
        end
end
