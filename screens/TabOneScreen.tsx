import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { View } from '../components/Themed';

export default function TabOneScreen() {
  const camera = {
    center: { latitude: 35.996543666002445, longitude: -78.90108037808307 },
    heading: 45,
    pitch: 45,
    zoom: 13.5,
    altitude: 0, // ignored by google maps
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
        onMapReady={() => console.log("TEST")}
        style={{ height: '100%' }}
        {...platformProps}
      >
        <Marker
          coordinate={{ latitude: 35.9945931, longitude: -78.8754963 }}
          onPress={() => console.log('marker')}
          title="MARKER"
        />
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
