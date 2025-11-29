class CreateUserSearchAnalytics < ActiveRecord::Migration[7.0]
  def change
    create_table :user_search_analytics do |t|
      t.string :record
      t.string :ip_details

      t.timestamps
    end
  end
end
