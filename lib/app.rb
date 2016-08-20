ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require './ruby_models/note'

class NoteUwrote < Sinatra::Base
  get '/' do
    "Hello world!"
  end

  post '/notes' do
    Note.create(message: params[:messages])
  end

  get '/notes' do
    Note.all.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
