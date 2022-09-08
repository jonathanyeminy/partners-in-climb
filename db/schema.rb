# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_08_140205) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "climber_trips", force: :cascade do |t|
    t.bigint "climber_id"
    t.bigint "trip_id"
    t.boolean "organizer", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["climber_id"], name: "index_climber_trips_on_climber_id"
    t.index ["trip_id"], name: "index_climber_trips_on_trip_id"
  end

  create_table "climbers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gears", force: :cascade do |t|
    t.bigint "trip_id"
    t.bigint "climber_id"
    t.string "name"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["climber_id"], name: "index_gears_on_climber_id"
    t.index ["trip_id"], name: "index_gears_on_trip_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trips", force: :cascade do |t|
    t.bigint "location_id"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_trips_on_location_id"
  end

end
