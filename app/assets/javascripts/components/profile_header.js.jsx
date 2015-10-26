var ProfileHeader = React.createClass({
  getInitialState: function(){
    var currentUser = this.props.currentUser
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

  componentWillUnmount: function(){
    CurrentUserStore.removeCurrentUserChangeListener(this._onChange);
  },

  handleNewProfilePhoto: function(){
    var photo = this.state.currentUser.profilePhotoObject;
    var photoCoords = photo.coordinates.custom[0];
    var profilePhotoURL = "https://res.cloudinary.com/dbw79utiw/image/upload/x_" +
      photoCoords[0] + ",y_" + photoCoords[1] + ",w_" +
      photoCoords[2] +  ",h_" + photoCoords[2] + ",c_crop/" +
      photo.path;
    this.state.currentUser.profilePhotoURL = profilePhotoURL;
    var updatedUser = {
      profile_photo_object: JSON.stringify(this.state.currentUser.profilePhotoObject),
      profile_photo_url: this.state.currentUser.profilePhotoURL
    };
    ApiUtil.editCurrentUser(updatedUser);
    this.setState({profilePhotoURL:profilePhotoURL});
  },

  handleNewCoverPhoto: function(){
    var photo = this.state.currentUser.coverPhotoObject;
    var photoCoords = photo.coordinates.custom[0];
    var coverPhotoURL = "https://res.cloudinary.com/dbw79utiw/image/upload/x_" +
      photoCoords[0] + ",y_" + photoCoords[1] + ",w_" +
      photoCoords[2] +  ",h_" + photoCoords[2] + ",c_crop/" +
      photo.path;
    this.state.currentUser.coverPhotoURL = coverPhotoURL;
    var updatedUser = {
      cover_photo_object: JSON.stringify(this.state.currentUser.coverPhotoObject),
      cover_photo_url: this.state.currentUser.coverPhotoURL
    };
    ApiUtil.editCurrentUser(updatedUser);
    this.setState({coverPhotoURL:coverPhotoURL});
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
        that.state.currentUser.profilePhotoObject = result[0];
        that.handleNewProfilePhoto();
        that.setState({currentUser:{profilePhotoObject:result[0]}});
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
        that.state.currentUser.coverPhotoObject = result[0];
        that.handleNewCoverPhoto();
        that.setState({currentUser:{coverPhotoObject: result[0]}});
      }
    });
  },
  _onChange: function(){
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function(){
    return (
      <div className="card hovercard">
        <div className="card-background">
          <div className="edit">Edit photo<i className="glyphicon glyphicon-edit"></i></div>
          <img className="card-bkimg"
               id="upload_cover_widget_opener"
               alt=""
               src={this.state.currentUser.cover_photo_url} />
        </div>
        <div className="useravatar">
          <img alt=""
               id="upload_profile_widget_opener"
               src={this.state.currentUser.profile_photo_url}/>
          <div className="edit"><i className="glyphicon glyphicon-edit"></i></div>
        </div>
      </div>
    )
  }
});
