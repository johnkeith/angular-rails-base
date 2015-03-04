class SpreadsheetsController < ApplicationController
	respond_to :json

	def upload
		# uploads file and returns path to that file
		file_path = Rails.root.join('tmp', params[:file].original_filename)
		File.open(file_path, "w:ASCII-8BIT") do |f|
			f.write params[:file].read
		end

		render json: [{ file_path: file_path }].to_json, status: :created
	end

	def parse_uploaded_sheet(file_name)

	end
end