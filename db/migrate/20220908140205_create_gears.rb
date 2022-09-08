class CreateGears < ActiveRecord::Migration[6.1]
  def change
    create_table :gears do |t|
      t.belongs_to :trip, index: true
      t.belongs_to :climber, index: true
      t.string :name
      t.integer :quantity

      t.timestamps
    end
  end
end
