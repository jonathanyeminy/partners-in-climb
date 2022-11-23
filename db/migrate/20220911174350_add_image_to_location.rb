class AddImageToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :image_url, :string
  end
end
