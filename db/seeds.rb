# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gregb = Climber.create(first_name: "Greg", last_name: "Blass", username: "Craig Blasted")
jonathany = Climber.create(first_name: "Jonathan", last_name: "Yeminy", username: "Jonny Five" email: "jonathanyeminy@yahoo.com", profile_photo: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274608390_3108541692695598_8952870513431273814_n.jpg?_nc_
    cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KcrttARwTpsAX_aDYro&_nc_ht=scontent-lga3-1.xx&oh=00_AT_8XAZX8VXtXBa_5O_4eKos932m-b
    yqgoHZMelHyFM6Xw&oe=631E1AF9")
birdsboro = Location.create(name: "Birdsboro Climbing Quarry", address: "Haycreek Rd, Birdsboro, PA 19508")
elcap = Location.create(name: "El Capitan", address: "Yosemite National Park")
tilbury = Location.create(name: "Tilbury", address: "Nanticoke, PA")
