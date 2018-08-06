import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import quotes from '../quotes';

const Quotes = props => {
  const { navigate } = props.navigation;
  return (
    <View>
      <FlatList
        data={quotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.quote}</Text>}
      />
    </View>
  );
};

export default Quotes;
