import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import quotes from '../quotes';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(guess) {
    this.setState({
      guess
    });
  }

  handleSubmit() {
    const matches = quotes.filter(movie =>
      movie.quote.toLowerCase().includes(this.state.guess.toLowerCase())
    );
    this.setState({
      guess: ''
    });
    this.props.navigation.navigate('Movies', matches);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>WHAT'S THAT FROM?</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={this.handleChange}
          value={this.state.guess}
          placeholder="Movie Quote Here"
        />
        <Button onPress={this.handleSubmit} title="Search for Quote" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: '#333444'
  },
  title: {
    color: '#333444',
    fontSize: 22
  },
  inputField: {
    // backgroundColor: '#aaaaaa',
    height: 20,
    fontSize: 18
  }
});
