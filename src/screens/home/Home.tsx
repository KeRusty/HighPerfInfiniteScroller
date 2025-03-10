import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useInfinitePosts} from '../../hooks/useInfintePosts';

// Components
import {PostItem, ListFooter} from '../../components';

// Styles
import {styles} from './styles';

function HomeScreen() {
  const {posts, loading, error, loadMorePosts, handleLoadMore, isItemLoaded} =
    useInfinitePosts();

  useEffect(() => {
    loadMorePosts(0, 19);
  }, []);

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator style={styles.loader} />;
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        renderItem={({item, index}) => {
          return (
            <PostItem key={index} item={item} isItemLoaded={isItemLoaded} />
          );
        }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        keyExtractor={item => item?.id?.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

export default HomeScreen;
