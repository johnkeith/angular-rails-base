class SpreadsheetController < ApplicationController\
	respond_with :json

	def upload
		# grab file from params
		# save to /tmp folder
	end

	def parse_to_json
		# read file in /tmp folder
		# parse then convert to json
		# send it out
	end
end