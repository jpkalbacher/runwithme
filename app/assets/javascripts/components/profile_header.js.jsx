var ProfileHeader = React.createClass({
  getInitialState: function(){
    return {currentUser: this.props.currentUser};
  },

  componentDidMount: function(){
    CurrentUserStore.addCurrentUserChangeListener(this._onChange);
    document.getElementById("upload_profile_widget_opener").addEventListener("click",
                                                    this.profilePhotoWidget, false);
    document.getElementById("upload_cover_widget_opener").addEventListener("click",
                                                    this.coverPhotoWidget, false);
    ApiUtil.getCurrentUser();
  },

  buildURLs:function(){
    that = this;
    if (this.props.currentUser["profile_picture_url"]){
      var profilePhotoObject = this.props.currentUser["profile_picture_url"];
      var coverPhotoObject = this.props.currentUser["cover_photo_url"];
      if (this.props.currentUser["profile_picture_url"]["coordinates"]){
        var profileCoords = profilePhotoObject["coordinates"]["custom"][0];
        var coverCoords = coverPhotoObject["coordinates"]["custom"][0];
        var profilePhotoURL = "https://res.cloudinary.com/dbw79utiw/image/upload/x_" +
          profileCoords[0] + ",y_" + profileCoords[1] + ",w_" +
          profileCoords[2] +  ",h_" + profileCoords[2] + ",c_crop/" +
          profilePhotoObject.path;
        var coverPhotoURL = "https://res.cloudinary.com/dbw79utiw/image/upload/x_" +
          coverCoords[0] + ",y_" + coverCoords[1] + ",w_" +
          coverCoords[2] +  ",h_" + coverCoords[2] + ",c_crop/" +
          coverPhotoObject.path;
      } else {
        profilePhotoURL = profilePhotoObject["secure_url"];
        coverPhotoURL = coverPhotoObject["secure_url"];
      }
      that.setState({coverPhotoURL:coverPhotoURL, profilePhotoURL:profilePhotoURL});
    }
  },

  componentWillUnmount: function(){
    CurrentUserStore.removeCurrentUserChangeListener(this._onChange);

  },

  handleNewProfilePhoto: function(){
    var updatedUser = {
      profile_picture_url: JSON.stringify(this.state.currentUser.profile_picture_url)
    };
    ApiUtil.editCurrentUser(updatedUser);
  },

  handleNewCoverPhoto: function(){
    var updatedUser = {
      cover_photo_url: JSON.stringify(this.state.currentUser.cover_photo_url)
    };
    ApiUtil.editCurrentUser(updatedUser);
  },

  profilePhotoWidget: function () {
    that = this;
    cloudinary.openUploadWidget({
      cloud_name: 'dbw79utiw',
      upload_preset: 'o31botki',
      theme: 'minimal',
      cropping: 'browser',
      cropping_aspect_ratio: 1
    },
    function(error, result) {
      console.log(error, result);
      if(result){
        that.state.currentUser.profile_picture_url = result[0];
        that.handleNewProfilePhoto();
        that.setState({currentUser:{profile_pic: result[0]}});
      }
    });
  },

  coverPhotoWidget: function () {
    that = this;
    cloudinary.openUploadWidget({
      cloud_name: 'dbw79utiw',
      upload_preset: 'o31botki',
      theme: 'minimal',
      cropping: 'browser',
    },
    function(error, result) {
      console.log(error, result);
      if (result){
        that.state.currentUser.cover_photo_url = result[0];
        that.handleNewCoverPhoto();
        that.setState({currentUser:{cover_photo_url: result[0]}});
      }
    });
  },
  _onChange: function(){
    this.setState({currentUser: CurrentUserStore.currentUser()});
    this.buildURLs();
  },

  render: function(){
    return (
      <div className="card hovercard">
        <div className="card-background">
          <div className="edit">Edit photo<i className="glyphicon glyphicon-edit"></i></div>
          <img className="card-bkimg"
               id="upload_cover_widget_opener"
               alt=""
               src={this.state.coverPhotoURL} />
        </div>
        <div className="useravatar">

          <img alt=""
               id="upload_profile_widget_opener"
               src={this.state.profilePhotoURL}/>
          <div className="edit"><i className="glyphicon glyphicon-edit"></i></div>
        </div>
      </div>
    )
  }
});
