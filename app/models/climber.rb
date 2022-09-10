class Climber < ApplicationRecord
    has_many :climber_trips
    has_many :trips, through: :climber_trips

    validates :email, presence: true
    # validates :email, email: true
    # validates :email, uniqueness: { case_sensitive: false }, allow_blank: true

    has_secure_password
end
