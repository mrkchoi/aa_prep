class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content, null: false
      t.references :commentable, polymorphic: true, index: true
      t.timestamps
    end
  end
end