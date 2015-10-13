# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Event.delete_all

User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))
User.create(email: Faker::Internet.email, first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name, password: Faker::Internet.password(8))

Event.create(event_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 2,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 3,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 4,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 5,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Event.create(event_type: Faker::Team.sport, owner_id: 6,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)


#  type                 :string           not null
#  start_time           :datetime         not null
#  owner_id             :integer          not null
#  latitude             :float            not null
#  longitude            :float            not null
#  location_description :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
