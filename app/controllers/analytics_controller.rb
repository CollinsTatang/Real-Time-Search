class AnalyticsController < ApplicationController
  def index
    user_ip = request.remote_ip
    @user_searches = UserSearchAnalytic.where(ip_details: user_ip)
      .group(:record)
      .select('record, COUNT(*) as search_count')
      .order('search_count DESC')
  end
end
