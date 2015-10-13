# == Schema Information
#
# Table name: events
#
#  id                   :integer          not null, primary key
#  type                 :string           not null
#  start_time           :datetime         not null
#  owner_id             :integer          not null
#  latitude             :float            not null
#  longitude            :float            not null
#  location_description :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Event < ActiveRecord::Base
end
