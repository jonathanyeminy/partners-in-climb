class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  def current_climber
    if session[:climber_id]
      @current_climber ||= Climber.find_by(id: session[:climber_id])
    end
  end

  def signed_in?
    session.include? :climber_id
  end
  
  private 
  
  def authorize 
    if !signed_in?
      return render json: { error: ["Not authorized"] }, status: :unauthorized unless session.include? :climber_id
    end
  end


end
