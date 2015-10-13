# Schema Information

## users
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
email               | string    | not null, indexed, unique
password_digest     | string    | not null
first_name          | string    | not null
last_name           | string    | not null
profile_picture_url | string    |
session_token       | string    | not null, indexed, unique

## events
column name           | data type | details
----------------------|-----------|-----------------------
id                    | integer   | not null, primary key
type                  | string    | not null
start_time            | datetime  | not null
end_time              | datetime  | not null
owner_id              | integer   | not null, foreign key (references users), indexed
latitude              | float     | not null
longitude             | float     | not null
location_description  | string    | not null

## followers
column name       | data type | details
------------------|-----------|-----------------------
owner_id          | integer   | not null
follower_id       | integer   | not null
following_status  | integer   | not null

