class AddDidExerciseToEntry < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :did_exercise, :boolean
  end
end
