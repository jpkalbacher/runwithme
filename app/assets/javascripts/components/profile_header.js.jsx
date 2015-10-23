var ProfileHeader = React.createClass({
  getInitialState: function(){
    return {currentUser: this.props.currentUser};
  },

  componentDidMount: function(){
    CurrentUserStore.addCurrentUserChangeListener(this._onChange);
    document.getElementById("upload_widget_opener").addEventListener("click",
                                                    this.imageWidget, false);

    ApiUtil.getCurrentUser();
  },

  componentWillUnmount: function(){
    CurrentUserStore.removeCurrentUserChangeListener(this._onChange);
    document.getElementById("upload_widget_opener").removeEventListener("click",
                                                    this.imageWidget, false);
  },

  handleNewPhoto: function(){
    ApiUtil.editCurrentUser(this.state.currentUser);
  },

  imageWidget: function () {
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
      that.state.currentUser.profile_picture_url = result[0].secure_url;
      that.handleNewPhoto();
      that.setState({currentUser:{profile_pic: result[0].secure_url}});
    });
  },

  _onChange: function(){
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function(){
    return (
      <div className="card hovercard">
        <div className="card-background">
          <img className="card-bkimg"
               alt=""
               src="http://i.huffpost.com/gen/1730217/images/n-SURFING-WORKOUT-large570.jpg" />
        </div>
        <div className="useravatar">
          <img alt=""
               id="upload_widget_opener"
               src={this.state.currentUser.profile_picture_url}/>
          <div className="edit"><i className="glyphicon glyphicon-edit"></i></div>
        </div>
      </div>
    )
  }
});
