Rails.application.routes.draw do
  get '/', to: 'search#index'
  post '/search', to: 'search#index'
  get '/userDetails', to: 'analytics#index'
  get '/trends', to: 'analytics#search_trends'
end