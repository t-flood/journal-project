class AddLikesToEntry < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :likes, :integer, default: 0, null: false
  end
end
