class ChangeIntegerLimitInClimbers < ActiveRecord::Migration[6.1]
  def change
    change_column :climbers, :phone, :integer, limit: 8
  end
end
