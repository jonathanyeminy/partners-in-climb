class Gear < ApplicationRecord
    belongs_to :climber
    belongs_to :trip

    validates :name, presence: true
    validates :quantity, numericality: true
end
