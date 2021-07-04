import * as React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { View } from '../components/Themed';
import { useGetPantriesQuery } from '../services/api';

export default function TabOneScreen() {
  const { data } = useGetPantriesQuery(undefined);
  const camera = {
    center: { latitude: 35.996543666002445, longitude: -78.90108037808307 },
    heading: 0,
    pitch: 0,
    zoom: 12.5, // ignored by apple maps
    altitude: 22500, // ignored by google maps
  };
  const platformProps = {
    ...Platform.select({
      default: {
        googleMapsApiKey: ""
      }
    }
  )};
  return (
    <View style={styles.container}>
      <MapView
        camera={camera}
        style={{ height: '100%' }}
        {...platformProps}
      >
        {data && data.map((pantry) => ((
          <Marker
            key={pantry.properties.name}
            coordinate={{ latitude: pantry.geometry.coordinates[1], longitude: pantry.geometry.coordinates[0] }}
            title={pantry.properties.name}
            >
              <Callout>
                <Text style={ tw`font-bold` }>{pantry.properties.name}</Text>
                <Text>{pantry.properties.operdays}</Text>
                <Text>{pantry.properties.operhours}</Text>
              </Callout>
            </Marker>
        )))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
