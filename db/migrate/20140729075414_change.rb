class Change < ActiveRecord::Migration
  def self.up
    remove_column :users, :mobile
    add_column :users, :mobile, :integer, :limit => 8
   end

  def self.down
    add_column :users, :mobile, :integer
    remove_column :users, :mobile
   end
end
