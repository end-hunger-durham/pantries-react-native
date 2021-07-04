import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { Text, View } from '../components/Themed';
import { useGetPantriesQuery } from '../services/api';
import { Pantry } from '../types';

const PantryListItem = ({ pantry }: { pantry: Pantry }) => (
  <View style={ tw`border-b border-gray-300 py-4 w-full flex flex-row items-center` }>
    <View style={ tw.style('mr-2', { width: "90%" }) }>
      <Text style={ tw`pb-1 font-bold` }>{pantry.properties.name}</Text>
      <Text style={ tw`pb-1` }>{pantry.properties.operdays}</Text>
      <Text>{pantry.properties.operhours}</Text>
    </View>
    <View>
      <Ionicons size={15} name="chevron-forward" />
    </View>
  </View>
);

const sortName = (pantryA: Pantry, pantryB: Pantry) => {
  const { name: a } = pantryA.properties;
  const { name: b } = pantryB.properties;
  return a.localeCompare(b, 'en', { sensitivity: 'base' });
};

export default function TabTwoScreen() {
  const { data } = useGetPantriesQuery(undefined);
  const [pantries, setPantries] = useState<Pantry[]>([]);
  useEffect(() => {
    if (!data) {
      setPantries([]);
    } else {
      setPantries([...data].sort(sortName));
    }
  }, [data])
  return (
    <View style={ tw`flex-1 items-center justify-center px-2` }>
      <FlatList data={pantries} renderItem={({ item: pantry }) => <PantryListItem key={pantry.properties.name} pantry={pantry} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
