class Trip < ApplicationRecord
    has_many :climber_trips
    has_many :climbers, through: :climber_trips
    has_many :gears

    belongs_to :location

    validates :date, presence: true
    validates :location, presence: true
end
