class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,:confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :mobile, :first_name, :last_name
  attr_accessible :terms


  validates :email, :uniqueness => true,  :presence => true
  validates :first_name, :last_name, :presence => true
  validates :mobile,  :presence => true, :uniqueness => true, length: { minimum: 13, maximum: 13 }, :numericality => true
  validates_acceptance_of :terms, :on => :create

end
