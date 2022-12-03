Rails.application.routes.draw do
  
  devise_for :users
  resources :articles
  root "articles#index"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html 
end
