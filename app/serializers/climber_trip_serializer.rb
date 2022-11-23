class ClimberTripSerializer < ActiveModel::Serializer
  attributes :id, :organizer, :short_name
  # belongs_to :climber
 
  
  def short_name
    object.climber.first_name
  end

end
