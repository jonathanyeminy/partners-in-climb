class AddPhoneToClimbers < ActiveRecord::Migration[6.1]
  def change
    add_column :climbers, :phone, :integer
  end
end
