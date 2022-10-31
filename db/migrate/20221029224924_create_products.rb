class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :image_url
      t.integer :price
      t.integer :farmer_id

      t.timestamps
    end
  end
end
