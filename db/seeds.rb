# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Activity.delete_all

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

Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
  latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
  location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 4.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now + 6.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: Faker::Address.latitude, longitude: Faker::Address.longitude,
location_description: Faker::Address.city, start_time: Time.now)

Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 37.345345, longitude: -122.111453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: 37.123463, longitude: -122.99823,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 37.98756, longitude: -122.123123,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 37.44444, longitude: -122.09283049,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: 37.653645, longitude: -122.2342342,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: 38.2341234, longitude: -123.3453453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: 38.00000, longitude: -122.3453453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: 38.345345, longitude: -123.11111,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 38.86465463, longitude: -123.09283409,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 2,
latitude: 38.5423525, longitude: -121.3453453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 38.52345254, longitude: -122.99953453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 1,
latitude: 39.23454353, longitude: -122.9080098,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 3,
latitude: 39.754356, longitude: -123.3453453,
location_description: Faker::Address.city, start_time: Time.now)
Activity.create(activity_type: Faker::Team.sport, owner_id: 4,
latitude: 37.746299, longitude: -122.438630,
location_description: Faker::Address.city, start_time: Time.now + 14.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 5,
latitude: 37.782125, longitude: -122.488068,
location_description: Faker::Address.city, start_time: Time.now + 14.days)
Activity.create(activity_type: Faker::Team.sport, owner_id: 6,
latitude: 37.782396, longitude: -122.418717,
location_description: Faker::Address.city, start_time: Time.now + 14.days)




#  type                 :string           not null
#  start_time           :datetime         not null
#  owner_id             :integer          not null
#  latitude             :float            not null
#  longitude            :float            not null
#  location_description :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
