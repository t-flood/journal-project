class AddDidReadToEntry < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :did_read, :boolean
  end
end
