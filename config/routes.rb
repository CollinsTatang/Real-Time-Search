Rails.application.routes.draw do
  get '/', to: 'search#index'
  post '/search', to: 'search#index'
  get '/trends', to: 'analytics#search_trends'
end