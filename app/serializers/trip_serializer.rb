class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :climber_trips, :gears, :location
end
