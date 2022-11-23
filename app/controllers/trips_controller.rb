class TripsController < ApplicationController
    
    def index
        trip = Trip.all.order(date: :asc)
        render json: trip
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def new
        trip = Trip.new
    end

    # def create
    #     trip = Trip.create!(trip_params)
    #     render json: trip, status: :ok
    #     if trip.save
    #         trip.ClimberTrips.create!(
    #             climber: current_climber,
    #             organizer: true
    #         ) 
    #    else
    #     #handle form error
    #    end
    # end

    def create
        trip = Trip.create(trip_params)
        if trip.valid?
            session[:trip_id] = trip.id
            render json: trip, status: :created
        else
            render json: {errors: trip.errors.full_messages}, status: :unprocessable_entity
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
