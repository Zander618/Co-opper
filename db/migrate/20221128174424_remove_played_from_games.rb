class RemovePlayedFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :played, :boolean
  end
end
