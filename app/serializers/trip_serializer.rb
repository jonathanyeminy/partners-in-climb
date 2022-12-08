class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :date, :location

  attribute :climber_trips do |object|
    object.climber_trips.map {|climber| {id: climber.climber.id, short_name: climber.climber.first_name}}
  end

  attribute :organizer do |object|
    climber = object.climber_trips.find_by(organizer: true)
    if climber.present?
      {id: climber.climber.id, short_name: climber.climber.first_name}
    else
      {}
    end
  end

  attribute :gears do |object|
    object.gears.map {|gear| {name: gear.name, quantity: gear.quantity,owner:  gear.climber.first_name + " " + gear.climber.last_name[0,1]}}
  end
  
  attribute :trip_images do |object|
    object.trip_images.map {|trip_image| {image_url: trip_image.image}}
  end
  
end
