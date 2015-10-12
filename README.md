# MVP

Minimum Viable Product
- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create Event
  - [ ] location from google maps
  - [ ] start time and end time
  - [ ] event name
- [ ] Edit/Delete event
- [ ] As a user I should be able to view all of my upcoming activities on the map
- [ ] Search for friends
- [ ] Add friends
- [ ] View all of friends upcoming activities on map


# Design Docs

- [Wireframes](docs/wireframes.md)
- [Schema](docs/schema.md)

# Implementation Timeline

## Phase 1 - User Authentication (1.5 days)

In phase one I will implement user signpu and authentication using BCrypt. After Signup/Login the user will be placed on a page that contains the container for the applications root React component. I will also set up a full JSON API for Events. After phase one, users will be able to create an account and login, and be placed on an empty page.


## Phase 2: Flux Architecture, GoogleMaps integration and Event CRUD (3.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. I will also integrate with GoogleMaps. After the basic Flux architecture has been set up, an Event store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Still undetermined whether or not I will need a marker store. At the end of Phase 2, all event CRUD operations will be working in the browser. All events (not just the current users) should be viewable on the map at this point.

## Phase 3: User Profile Page (1 day)

I will set up a user profile page that allows users to upload a profile picture. I will also create the view and routers for friends and for searching for friends. Friend search and display will NOT be working after Phase 3.

## Phase 4: Search for and add friends (1 day)

In Phase 4 I will add the ability to search for friends. Search will look through the entire user table to search for users by first and last name. After phase 4, users will be able to search for and add friends. At this time there will be no ability to "unfriend" and no ability to accept a friend request. It will work a little more like instagram/twitter "follow" for unrestricted profiles.

## Phase 5: Styling (2 days)

Smooth transition between map and profile. Change the map skin so it is no longer google maps default skin. Hover over friend photos to enlarge photo.

## Bonus Features - TBD
- [ ] Sport specific map icons
- [ ] Friend request approval/denial
- [ ] Map filtering by date/time
- [ ] Map filtering by event/activity type
- [ ] Add ability to "join" activities
