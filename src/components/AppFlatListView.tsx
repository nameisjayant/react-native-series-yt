import {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';

const AppFlatListView = () => {
  const [data, setData] = useState<string[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setData([
      'Apple',
      'Banana',
      'Orange',
      'Pineapple',
      'Cherry',
      'Apple',
      'Banana',
      'Orange',
    ]);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData([...data, 'New Fruit']);
    }, 2000);
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 12}} />}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#ff2322'}
          colors={['#33923']}
        />
      }
      ListHeaderComponent={
        <Text style={{fontSize: 30, fontWeight: 700}}>{'Fruit List'}</Text>
      }
      ListFooterComponent={
        <Text style={{fontSize: 30, fontWeight: 700}}>{'Fruit Footer'}</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 500,
    color: 'red',
  },
});

export default AppFlatListView;
