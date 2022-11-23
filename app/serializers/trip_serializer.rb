class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :date, :location

  attribute :climber_trips do |object|
    object.climber_trips.map {|climber| {id: climber.climber.id, short_name: climber.climber.first_name}}
  end

  attribute :organizer do |object|
    climber = object.climber_trips.find_by(organizer: true)
    {id: climber.climber.id, short_name: climber.climber.first_name}
  end

  attribute :gears do |object|
    object.gears.map {|gear| {name: gear.name, quantity: gear.quantity}}
  end
  
end
