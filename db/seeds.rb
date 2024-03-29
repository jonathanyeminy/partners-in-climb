# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# gregb = Climber.create!(first_name: "Greg", last_name: "Blass", email: "craig@blasted.com", password: "password")
# jonathany = Climber.create!(first_name: "Jonathan", last_name: "Yeminy", email: "jonathanyeminy@yahoo.com", password: "password")
# adrienne = Climber.create!(first_name: "Adrienne", last_name: "Halterman", email: "adrienne.halterman@iamsohot.com", password: "imsohot")
# micah = Climber.create!(first_name: "Micah", last_name: "Coolguy", email: "Micah@coolguy.com", password: "password")
# loreto = Climber.create!(first_name: "Loreto", last_name: "Micah", email: "imfrom@chile.com", password: "password")
# michael = Climber.create!(first_name: "Michael", last_name: "Hadida", email: "Michaelhadida@imadj.com", password: "password")
# natan = Climber.create!(first_name: "Natan", last_name: "Segal", email: "Natan@iamdabest.com", password: "password")


birdsboro = Location.create(name: "Birdsboro Climbing Quarry", address: "Haycreek Rd, Birdsboro, PA 19508")
elcap = Location.create(name: "El Capitan", address: "Yosemite National Park", image_url: "https://i.redditmedia.com/T68doRWGR52DpS6vew0HpiWm")
tilbury = Location.create(name: "Tilbury", address: "Nanticoke, PA", image_url: "https://epaclimbers.org/wp-content/uploads/mocanaq")
red_river_gorge = Location.create(name: "Red River Gorge", address: "74 Sunshine Rd, Zoe, KY 41397", image_url: "https://cdn2.apstatic.com/photos/climb/106982277_m")
red_rocks = Location.create(name: "Red Rocks", address: "1000 Scenic Loop Dr, Las Vegas, NV 89161", image_url: "https://cdn2.apstatic.com/photos/climb/105900824_m")
puerto_rico = Location.create(name: "Puerto Rico, Cerro las Tetas", address: "3QVF+GFM Vázquez, Salinas, Puerto Rico", image_url: "https://cdn2.apstatic.com/photos/climb/116529792_m")
rumney = Location.create(name: "Rumney Climbing, New Hampshire", address: "Rumney School District, Rumney, NH 03266", image_url: "https://i.imgur.com/MCC2uA0.png")

trip1 = Trip.create!(name: 'December in Yosemite', date:'2022-12-08', location: elcap)
trip2 = Trip.create!(name: 'Quick Tilbury Run', date:'2022-10-08', location: tilbury)
trip3 = Trip.create!(name: 'B-boro with the homies', date:'2022-11-08', location: birdsboro)
trip4 = Trip.create!(name: 'Kentucky Jaunt' date:'2022-12-08', location: red_river_gorge)

# gear1 = Gear.create!(name: "Rope - 70M", quantity: 1, trip: trip1, climber: adrienne)
# gear2 = Gear.create!(name: "Quick Draw", quantity: 20, trip: trip1, climber: micah)
# gear3 = Gear.create!(name: "Alpine Draw", quantity: 4, trip: trip1, climber: loreto)
# gear4 = Gear.create!(name: "Carabiner", quantity: 8, trip: trip1, climber: natan)
