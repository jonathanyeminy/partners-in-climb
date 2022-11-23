class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def show
        climber = Climber.find_by(id: session[:climber_id])

        if climber
            render json: climber, status: :ok
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    def create 
        climber = Climber.find_by(email: params[:email])
  
        if climber&.authenticate(params[:password])
            session[:climber_id] = climber.id 
            render json: climber, status: :created
        else
            render json: {errors: ["Invalid climber name or password"]}, status: :unauthorized
        end
  
    end
    def addClimber
        climber = Climber.find_by(id: session[:climber_id])
        trip = Trip.find(params[:id])
        trip.climber_trips.create!(
            climber: climber,
            organizer: true
        ) 
        trip.save
        
        render json: trip
    end
    def addGear
        climber = Climber.find_by(id: session[:climber_id])
        trip = Trip.find(params[:id])
        trip.gears.create!(
            name:params[:name],
            quantity: params[:quantity],
            climber: climber,
            trip: trip
        ) 
        trip.save
        
        render json: trip
    end
    def update 
        climber = Climber.find_by(id: session[:climber_id])
        climber.first_name = params[:first_name]
        climber.last_name = params[:last_name]
        climber.phone = params[:phone]
        climber.profile_photo = params[:profile_photo]
        climber.save

        if climber
            render json: climber, status: :ok
        else
            render json: {error: ["Unable to Edit profile"]}, status: :not_found
        end
    end
  
    def destroy
        session.delete :climber_id
        head :no_content
    end
end