class RemovePhotoIdFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :photo_id, :integer
  end
end
