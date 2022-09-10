class ClimberTrip < ApplicationRecord
    belongs_to :climber
    belongs_to :trip
    
    validates :climber, presence: true
    validates :trip, presence: true

end
