#About

www.getoutside.xyz is a web application built with Ruby on Rails and React.js. As a user, you can find and join activities.

#TODOS

- [ ] Implement activity stream to show users upcoming    activities
- [ ] Add filter by activity
- [ ] Add filter by time
- [ ] Build out user profile to show friend requests



# MVP

Minimum Viable Product
- [x] Create an account
- [x] Log in / Log out
- [x] Create Event
  - [x] location from google maps
  - [x] start time and end time
  - [x] event name
- [x] Edit/Delete event
- [x] As a user I should be able to view all of my upcoming activities on the map
- [x] Search for users
- [x] Follow users
- [x] View all of followed users upcoming activities on map


# Design Docs

- [Wireframes](docs/wireframes.md)
- [Schema](docs/schema.md)

# Implementation Timeline

## Phase 1 - User Authentication (1.5 days)

In phase one I will implement user signup and authentication using BCrypt. After Signup/Login the user will be placed on a page that contains the container for the applications root React component. I will also set up a full JSON API for Events. After phase one, users will be able to create an account and login, and be placed on an empty page.

[details](docs/Phases/Phase1.md)


## Phase 2: Flux Architecture, GoogleMaps integration and Event CRUD (2.0 days)

Phase 2 is focused on setting up Flux, the React Router, and the React views. After the basic Flux architecture has been set up, an Event store will be implemented and a set of actions corresponding to the needed CRUD functionality created. At the end of Phase 2, all event CRUD operations will be working in the browser. Users should be able to create, edit and destroy events.

[details](docs/Phases/Phase2.md)

## Phase 2a: Google Maps (1.5 days)

Phase 2a - integrate with google maps. Google maps should display markers for each event that is in view. Map actions (click on owned_event, click on other_event, click on map should render the proper child component of Main.

## Phase 3: User Profile Page (1 day)

I will set up a user profile page that allows users to upload a profile picture. I will also create the view and routers for followers and for searching for users. User search and display will NOT be working after Phase 3.

[details](docs//Phases/Phase3.md)

## Phase 4: Search for follow users (1 day)

In Phase 4 I will add the ability to search for users. Search will look through the entire user table to search for users by first and last name. After phase 4, users will be able to search for and follow other users. At this time there will be no ability to "unfollow" and no ability to accept or block followers. It will work a little more like instagram/twitter "follow" for unrestricted profiles.

## Phase 5: Styling (2 days)

Smooth transition between map and profile. Change the map skin so it is no longer google maps default skin. Hover over user photos to enlarge photo.

## Bonus Features - TBD
- [ ] Sport specific map icons
- [ ] Friend request approval/denial
- [ ] Map filtering by date/time
- [ ] Map filtering by event/activity type
- [ ] Add ability to "join" activities
