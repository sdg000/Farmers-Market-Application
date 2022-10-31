class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :username
      t.string :location
      t.string :password_digest

      t.timestamps
    end
  end
end
