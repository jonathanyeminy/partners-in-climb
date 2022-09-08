class Climber < ApplicationRecord
    has_many :climber_trips
    has_many :trips, through: :climber_trips

    validates :first_name, presence: true
    validates :last_name, presence: true
end
