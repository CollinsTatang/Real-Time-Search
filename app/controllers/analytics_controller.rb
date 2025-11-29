class AnalyticsController < ApplicationController
  def index
    user_ip = request.remote_ip
    @user_searches = UserSearchAnalytic.where(ip_details: user_ip).order(created_at: :desc).limit(10)
    respond_to do |format|
      format.json { render json: @user_searches.as_json(only: %i[record ip_details]) }
    end
  end

  def search_trends
    user_ip = request.remote_ip
    @search_trends = UserSearchAnalytic.where(ip_details: user_ip)
      .group(:record)
      .select('record, COUNT(*) as search_count')
      .order('search_count DESC').limit(10)
    respond_to do |format|
      format.json { render json: @search_trends }
    end
  end
end
