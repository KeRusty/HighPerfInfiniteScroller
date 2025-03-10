import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {styles} from './styles';

interface PostItemProps {
  item: {
    title: string;
    body: string;
    id: string;
  };
}

function PostItem({item}: PostItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.body}>{item?.body}</Text>
      <Text style={styles.itemid}>{`Post ID: ${item?.id}`}</Text>
    </View>
  );
}

export default PostItem;
