import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text
} from 'native-base';

const QuoteList = props => {
  const { navigate } = props.navigation;
  const matches = props.navigation.state.params;
  return (
    // <View>
    //   <FlatList
    //     data={props.navigation.state.params}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity
    //         style={styles.item}
    //         onPress={() => navigate('Info', { movie: item })}
    //       >
    //         <Text style={styles.text}>{item.quote}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />
    // </View>
    <Container>
      <Content>
        <List>
          {matches.map((item, idx) => (
            <ListItem
              key={idx}
              onPress={() => navigate('Info', { movie: item })}
            >
              <Text>{item.quote}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

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
  }
});

export default QuoteList;
