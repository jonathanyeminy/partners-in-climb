class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.belongs_to :location, index: true
      t.string :name
      
      t.timestamps
    end
  end
end
