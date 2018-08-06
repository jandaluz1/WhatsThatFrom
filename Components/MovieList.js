import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import fetchMovies from '../store';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const matches = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.props.navigation.state.params}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigate('Info', { movie: item })}
            >
              <Text style={styles.text}>{item.quote}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    flexDirection: 'row',
    borderColor: 'black',
    borderStyle: 'solid',
    // padding: 10,
    margin: 10,
    height: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16
  }
});

const mapDispatch = dispatch => ({
  fetchMovies: movie => dispatch(fetchMovies(movie))
});

export default connect(
  null,
  mapDispatch
)(MovieList);
