import React, { PureComponent } from 'react'

class StrictAccess extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>This is the Login Validator!</p>
          <br />
        {(user.name === 'rafael' && user.password === 'trybeturmaxp')
          ? (<p>'Welcome, Rafael!'!</p>)
          : new alert('Acess Denied!')}
      </div>
    )
  }
}

export default StrictAccess;