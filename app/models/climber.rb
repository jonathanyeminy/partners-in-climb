class Climber < ApplicationRecord
    has_many :climber_trips
    has_many :trips, through: :climber_trips

    validates :email, presence: true
    validates_inclusion_of :phone, :in => 0..99999999999999, :message => "can only be between 0 and 9999999999."
    # validates :email, email: true
    # validates :email, uniqueness: { case_sensitive: false }, allow_blank: true

    has_secure_password

    def name
        "#{first_name} #{last_name}"
    end

    def to_s
        name
    end

end
