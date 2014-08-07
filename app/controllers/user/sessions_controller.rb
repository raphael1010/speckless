class User::SessionsController < Devise::SessionsController
	
	layout 'guest'


   
	def new
	    super
	end

	def create
	  super
	end

	def destroy
	  super
	end


end
