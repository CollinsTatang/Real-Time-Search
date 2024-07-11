class SearchController < ApplicationController
  protect_from_forgery except: :index

  def index
    query = params[:query]

    if query.present?
      @results = search_for_results(query)
      save_user_search(query)
    else
      @results = []
    end

    respond_to do |format|
      format.json { render json: @results.as_json(only: [:title]) }
      format.html do
        flash.now[:notice] = "No results found for '#{query}'" if @results.empty? && query.present?
        render :index
      end
    end
  end

  private

  def search_for_results(query)
    Article.where('title LIKE ?', "%#{query}%")
  end
  
  def save_user_search(query)
    user_search_details = UserSearchAnalytic.new(record: query, ip_details: request.remote_ip)
    user_search_details.save
  end
end
