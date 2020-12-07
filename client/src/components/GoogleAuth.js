import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        clientId:'951492596234-0ja235ltq3tt4omm6f6vr1ap8lii6rer.apps.googleusercontent.com',
        scope: 'email'
      }).then( () => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }else{
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signOut();
  }

  onSignOutClick = () => {
    this.auth.signIn();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null ){
      return null;
    }else if (this.props.isSignedIn === true){
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }else{
      return  (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render(){
    return <div>{this.renderAuthButton()}</div>;
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, 
  { signIn: signIn, signOut: signOut }
)(GoogleAuth);