Rails.application.routes.draw do
  root 'application#index'

  post '/api/upload_spreadsheet', to: 'spreadsheets#upload_and_parse'
end
