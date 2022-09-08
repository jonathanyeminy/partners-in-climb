class ClimberSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :profile_photo
end
