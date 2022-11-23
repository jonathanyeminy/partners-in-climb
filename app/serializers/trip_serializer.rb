class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :climber_count, :organizer
  has_many :climber_trips
  has_many :gears

  def climber_count
    object.climber_trips.count
  end

  # def trippers
  #   object.climber_trips.map do |tripper|
  #     {name: tripper.name}
  #   end
  # end

end
