import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-web-google-maps';

import EditScreenInfo from '../components/EditScreenInfo';

import { Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const camera = {
    center: { latitude: 35.996543666002445, longitude: -78.90108037808307 },
    heading: 90,
    pitch: 45,
    zoom: 11.5,
    altitude: 1000,
  };
  return (
    <View style={styles.container}>
      <MapView
        camera={camera}
        googleMapsApiKey="test"
        onMapReady={() => console.log("TEST")}
        style={styles.mapStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
