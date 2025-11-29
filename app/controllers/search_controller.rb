class SearchController < ApplicationController
  protect_from_forgery except: :index

  def index
    query = params[:query]

    save_user_search(query) if query.present?
    respond_to do |format|
      format.json { render json: { message: 'Success' } }
      format.html { render :index }
    end
  end

  private

  def save_user_search(query)
    user_search_details = UserSearchAnalytic.new(record: query, ip_details: request.remote_ip)
    user_search_details.save
  end
end
