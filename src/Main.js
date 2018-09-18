import React, { Component } from 'react';

import { NativeRouter, Switch, Route } from 'react-router-native';
import Register from './screens/Register';

class Main extends Component {

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Register} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default Main;
