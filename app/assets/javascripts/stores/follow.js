(function(root){
  var CHANGE_EVENT = "change";
  var _followers = [];
  var _following = [];

  var resetFollowers = function(followers){
    _followers = followers;
  };

  var resetFollowing = function(following){
    _following = following;
  };

  root.FollowStore = $.extend({}, EventEmitter.prototype, {

  });
})(this);
