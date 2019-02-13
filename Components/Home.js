import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, H2, Input, Button, Text } from 'native-base';
import quotes from '../quotes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // paddingLeft: 5,
    // paddingRight: 5
    // backgroundColor: '#333444'
  },
  // content: {
  //   width: '95%'
  // },
  title: {
    color: '#333444',
    fontSize: 22,
    // justifyContent: 'center',
    textAlign: 'center'
  },
  inputField: {
    //
  }
});

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
      // <View style={styles.container}>
      //   <Text style={styles.title}>WHAT'S THAT FROM?</Text>
      //   <TextInput
      //     style={styles.inputField}
      //     onChangeText={this.handleChange}
      //     value={this.state.guess}
      //     placeholder="Movie Quote Here"
      //   />
      //   <Button onPress={this.handleSubmit} title="Search for Quote" />
      // </View>
      <Container style={styles.container}>
        <Content padder style={styles.content}>
          <H2 style={styles.title}>What's That From</H2>
          <Input
            full
            style={styles.inputField}
            onChangeText={this.handleChange}
            value={this.state.guess}
          />
          <Button
            rounded
            info
            onPress={this.handleSubmit}
            full
            disabled={this.state.guess.length < 4}
          >
            <Text>Search</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
