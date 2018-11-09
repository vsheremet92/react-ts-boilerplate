import * as React from 'react';
import { Provider } from 'react-redux';
import Home from './containers/Home/Home';
import store from './config/store';

export default class App extends React.Component <{
  text: string,
}, {}> {
  render() {
    const { text } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Home />
          <h6>{text}</h6>
        </div>
      </Provider>
    );
  }
}
