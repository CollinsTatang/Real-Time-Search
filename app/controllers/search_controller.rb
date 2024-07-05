class SearchController < ApplicationController
  def index
    query = params[:query]
    articles = Article.new(title: query)
    articles.save
    @results = Article.where('title ILIKE ?', "%#{query}%")

    user_search_details = UserSearchAnalytic.new(record: query, ip_details: request.remote_ip)
    user_search_details.save

    respond_to do |format|
      format.json { render json: @results.as_json(only: [:title]) }
      format.html { render :index }
    end
  end
end
