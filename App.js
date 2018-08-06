import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Components/Home';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import Quotes from './Components/Quotes';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Movies: {
    screen: MovieList,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
