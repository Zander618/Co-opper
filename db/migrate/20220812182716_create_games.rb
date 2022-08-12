class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :release
      t.float :ign_rating
      t.text :overview
      t.string :image_url
      t.string :platform
      t.boolean :played

      t.timestamps
    end
  end
end
