import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies, resetState } from '../store';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  async componentDidMount() {
    const movie = this.props.navigation.state.params.movie;
    const title = movie.movie.replace(' ', '+');
    await this.props.fetchMovie(title);
  }

  onPress() {
    this.props.reset();
    this.props.navigation.navigate('Main');
  }

  render() {
    const movie = this.props.movie;
    console.log('MOVIE', movie);
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View>
            <Text style={styles.heading}>{movie.Title}</Text>
            <Text>{movie.Year}</Text>
            <Text style={styles.director}>Director: {movie.Director}</Text>
          </View>
          <Image style={styles.image} source={{ uri: movie.Poster }} />
        </View>
        <Text>Cast: {movie.Actors}</Text>
        <Text style={{ margin: 10 }}>Plot: {movie.Plot}</Text>
        <Button onPress={this.onPress} title="Another Quote?" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 10
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  heading: {
    fontSize: 22
  },
  director: {
    fontSize: 18
  }
});

const mapState = state => ({
  movie: state
});

const mapDispatch = dispatch => ({
  fetchMovie: movie => dispatch(fetchMovies(movie)),
  reset: () => dispatch(resetState())
});

export default connect(
  mapState,
  mapDispatch
)(MovieDetails);
