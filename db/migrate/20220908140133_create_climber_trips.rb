class CreateClimberTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :climber_trips do |t|
      t.belongs_to :climber, index: true
      t.belongs_to :trip, index: true
      t.boolean :organizer, default: false

      t.timestamps
    end
  end
end
