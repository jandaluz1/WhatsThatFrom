import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const QuoteList = props => {
  const { navigate } = props.navigation;
  return (
    <View>
      <FlatList
        data={props.navigation.state.params}
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
