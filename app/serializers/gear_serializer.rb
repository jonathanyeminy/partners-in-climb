class GearSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :owner

  def owner
    object.climber.first_name + " " + object.climber.last_name[0,1]
  end
end
