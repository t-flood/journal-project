class AddLikesToEntry < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :likes, :integer
  end
end
