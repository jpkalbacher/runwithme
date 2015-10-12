# Phase 3: User Profile Page (1 day)

## Rails
### Models
* follower

### Controllers
FollowersController (create, destroy, index, show, update)


### Views
* followers/index.json.jbuilder
* followers/show.json.jbuilder

## Flux
### Views (React Components)
* FollowersIndex
  - FollowersIndexItem
* SearchIndex

### Stores
* FollowersStore

### Actions
* ApiActions.receiveAllFollowers
* ApiActions.receiveSingleFollower
* ApiActions.receiveAllUsers
* ApiActions.receiveSingleUser
* ApiActions.deleteFollower

### ApiUtil
* ApiUtil.fetchAllFollowers
* ApiUtil.fetchSingleFollower
* ApiUtil.createFollower
* ApiUtil.destroyFollower
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser

## Gems/Libraries
