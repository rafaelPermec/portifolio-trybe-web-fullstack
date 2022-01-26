import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div className='box'>
        <p className='name'> {this.props.user.name} </p>
        <p className='email'> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="{this.props.user.name} personal avatar" />
      </div>
    );
  }
}

export default UserProfile;