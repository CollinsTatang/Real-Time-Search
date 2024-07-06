class SearchController < ApplicationController
  protect_from_forgery except: :index

  def index
    query = params[:query]

    if query.present? && query.match?(/\b\w+\z/)

      articles = Article.new(title: query)
      articles.save

      @results = Article.where('title ILIKE ?', "%#{query}%")

      user_search_details = UserSearchAnalytic.new(record: query, ip_details: request.remote_ip)
      user_search_details.save
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
end
