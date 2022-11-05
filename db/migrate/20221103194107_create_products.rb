class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :image_url
      t.integer :price
      t.references :farmer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
