import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Components/Home';
import QuoteList from './Components/QuoteList';
import MovieDetails from './Components/MovieDetails';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Movies: {
    screen: QuoteList,
    navigationOptions: {
      headerTitle: 'Quotes'
    }
  },
  Info: {
    screen: MovieDetails,
    navigationOptions: {
      headerTitle: 'Info'
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
