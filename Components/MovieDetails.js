import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import {
  Container,
  Button,
  Footer,
  Left,
  Right,
  Text,
  H1,
  H3
} from 'native-base';
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
    return (
      <Container style={{ flexDirection: 'column' }}>
        <Container style={{ flexDirection: 'row' }}>
          <Left style={{ flex: 1 }}>
            <Image style={styles.image} source={{ uri: movie.Poster }} />
          </Left>
          <Right style={{ flex: 2 }}>
            <H1>{movie.Title}</H1>
            <H3>{movie.Year}</H3>
          </Right>
        </Container>
        <Container>
          <Text>Cast:{movie.Actors}</Text>
          <Text>Director:{movie.Director}</Text>
          <Text>Plot:{movie.Plot}</Text>
        </Container>
        <Footer>
          <Button full onPress={this.onPress}>
            <Text>Another Quote?</Text>
          </Button>
        </Footer>
      </Container>
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
    width: 200,
    height: 200,
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
