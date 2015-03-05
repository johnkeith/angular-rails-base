class SpreadsheetsController < ApplicationController
	respond_to :json

	def upload_and_parse
		sheet_as_json = parse_spreadsheet(upload(params[:file]))
		
		render json: sheet_as_json, status: :ok
	end

	private
	
	def upload(file)
		# uploads file and returns path to that file
		file_path = Rails.root.join('tmp', file.original_filename)
		file = File.open(file_path, "w:ASCII-8BIT") do |f|
			f.write file.read
		end
		file_path.to_path
	end

	def parse_spreadsheet(file_path)
		if file_path.include? ".csv"
			sheet = Roo::CSV.new(file_path)
		elsif file_path.include? ".xlsx"
			sheet = Roo::Excelx.new(file_path)
		elsif file_path.include? ".ods"
			sheet = Roo::OpenOffice.new(file_path)
		end
		sheet.to_json
	end
end