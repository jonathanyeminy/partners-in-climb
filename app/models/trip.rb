class Trip < ApplicationRecord
    has_many :climber_trips
    has_many :climbers, through: :climber_trips
    has_many :gears
    has_many :trip_images

    belongs_to :location

    validates :date, presence: true
    validates :location, presence: true

    # def organizer
    #   climber_trips.find_by(organizer: true).try(:climber)
    # end
end
