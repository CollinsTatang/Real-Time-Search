class SearchController < ApplicationController
    def index
        record = params[:record]
        user_ip = request.remote_ip
        @results = Article.where('title ILIKE ?', "%#{record}%")

        user_search_details = UserSearchAnalytic.new(record: record, ip_details: request.remote_ip)
        user_search_details.save

        respond_to do |format|
            format.html { render :index } # Render the HTML view as before
            format.json { render json: @results } # Render the results as JSON
          end
      end      
end
