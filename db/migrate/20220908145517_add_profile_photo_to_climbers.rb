class AddProfilePhotoToClimbers < ActiveRecord::Migration[6.1]
  def change
    add_column :climbers, :profile_photo, :string
  end
end
