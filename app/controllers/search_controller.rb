class SearchController < ApplicationController
    def index
        query = params[:query]
        @results = Article.where('title ILIKE ?', "%#{query}%")
        render :index
      end      
end
