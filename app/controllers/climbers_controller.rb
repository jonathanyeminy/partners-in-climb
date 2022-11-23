class ClimbersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        render json: Climber.all
    end

    def create
        climber = Climber.create(climber_params)
        if climber.valid?
            session[:climber_id] = climber.id
            render json: climber, status: :created
        else
            render json: {errors: climber.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        climber = Climber.find_by(id: params[:id])

        if climber
            render json: climber, status: :ok
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    def update
        climber = Climber.find_by(id: params[:id])
        if climber
            climber.update(climber_params)
            render json: climber, status: :accepted
        else
            render json: {error: ["Not found"]}, status: :not_found
        end
    end

    private

    def climber_params
        params.permit( :id, :name, :first_name, :last_name, :email, :password, :phone, :profile_photo)
    end

end
