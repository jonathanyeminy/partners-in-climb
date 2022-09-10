class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create 
        climber = Climber.find_by(email: params[:email])
  
        if climber&.authenticate(params[:password])
            session[:climber_id] = climber.id 
            render json: climber, status: :created
        else
            render json: {errors: ["Invalid climber name or password"]}, status: :unauthorized
        end
  
    end
  
    def destroy
        session.delete :climber_id
        head :no_content
    end
end