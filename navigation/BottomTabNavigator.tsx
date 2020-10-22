import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, BottomTabs, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

type TabScreen = {
  name: BottomTabs,
  component: React.FunctionComponent,
  tabBarIcon: ((props: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode),
};
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const tabs: TabScreen[] = [
    {
      name: "Map",
      component: MapTab,
      tabBarIcon: ({ color }) => <TabBarIcon name="ios-map" color={color} />,
    },
    {
      name: "List",
      component: ListTab,
      tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="Map"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        {tabs.map(({ name, component, tabBarIcon }) => 
          <BottomTab.Screen key={name} name={name} component={component} options={{ tabBarIcon }} />
        )}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MapStack = createStackNavigator<TabOneParamList>();

function MapTab() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={TabOneScreen}
        options={{ headerTitle: 'Pantries Map' }}
      />
    </MapStack.Navigator>
  );
}

const ListStack = createStackNavigator<TabTwoParamList>();

function ListTab() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={TabTwoScreen}
        options={{ headerTitle: 'Pantries List' }}
      />
    </ListStack.Navigator>
  );
}
