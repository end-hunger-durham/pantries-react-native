import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import tw from 'tailwind-react-native-classnames';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, BottomTabs, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

type TabScreen = {
  name: BottomTabs,
  component: React.FunctionComponent,
  tabBarLabel: string;
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
      name: "MapTab",
      tabBarLabel: "Map",
      component: MapTab,
      tabBarIcon: ({ color }) => <TabBarIcon name="ios-map" color={color} />,
    },
    {
      name: "ListTab",
      tabBarLabel: "List",
      component: ListTab,
      tabBarIcon: ({ color }) => <TabBarIcon name="ios-list" color={color} />,
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="MapTab"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors[colorScheme].tint, tabBarStyle: tw`pt-2 pb-2` }}>
        {tabs.map(({ name, component, tabBarIcon, tabBarLabel }) => 
          <BottomTab.Screen key={name} name={name} component={component} options={{ tabBarIcon, tabBarLabel }} />
        )}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: 'ios-map' | 'ios-list'; color: string }) {
  return <Ionicons size={20} {...props} />;
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
