var EditProfile = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {currentUser: CurrentUserStore.currentUser()};
  },

  componentDidMount: function(){
    CurrentUserStore.addCurrentUserChangeListener(this._onChange);
    document.getElementById("upload_profile_widget_opener").addEventListener("click",
                                                    this.profilePhotoWidget, false);
    ApiUtil.getCurrentUser();
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

  _onChange: function(){
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  componentWillUnmount: function(){
    CurrentUserStore.removeCurrentUserChangeListener(this._onChange);
  },

  exitCreateView: function(){
    this.props.history.pushState(null, "/main/");
  },

  render: function(){
    return (
      <div className="row">
        <div className="display-box panel panel-default panel-body">
          <div className="clearfix box-top">
            <button type="button"
                  onClick={this.exitCreateView}
                  className="btn btn-default remove"
                  aria-label="Right Align">
                  <span className="glyphicon glyphicon-remove"
                        aria-hidden="true">
                  </span>
            </button>
          </div>
          <h3>Your Profile</h3>
          <form className="edit-profile-form">
            <div className="useravatar">
              <img alt=""
                   className="useravatar"
                   id="upload_profile_widget_opener"
                   src={this.state.currentUser.profile_photo_url}/>
              <div className="edit"><i className="glyphicon glyphicon-edit"></i></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
})
