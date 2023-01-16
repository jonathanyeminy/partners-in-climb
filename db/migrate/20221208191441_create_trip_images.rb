class CreateTripImages < ActiveRecord::Migration[6.1]
  def change
    create_table :trip_images do |t|
      t.string :image_url
      t.belongs_to :trip, index: true
      t.belongs_to :climber, index: true
      t.timestamps
    end
  end
end
