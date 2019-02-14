import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Thumbnail,
  Text,
  Left,
  Right
} from 'native-base';

class QuoteList extends Component {
  render() {
    const { navigate, goBack } = this.props.navigation;

    const matches = this.props.navigation.state.params;
    return (
      <Container>
        <Content>
          {console.log(matches)}
          {matches.length < 1 ? (
            <Button full style={styles.button} onPress={() => goBack()}>
              <Text>No Matches. Press to go back</Text>
            </Button>
          ) : (
            <List>
              {matches.map((item, idx) => (
                <ListItem
                  key={idx}
                  onPress={() => navigate('Info', { movie: item })}
                >
                  <Left>
                    <Text>{item.quote}</Text>
                  </Left>
                  <Right>
                    <Text>></Text>
                  </Right>
                </ListItem>
              ))}
            </List>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    flex: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    // padding: 10,
    margin: 10,
    height: 65,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    // flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 14
  },
  button: {
    margin: 'auto'
  }
});

export default QuoteList;
