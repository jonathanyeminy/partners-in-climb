class TripImage < ApplicationRecord
    belongs_to :trip
    belongs_to :climber
    
end
