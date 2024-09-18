import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="item2" // Set the default open item
      >
        
      <Drawer.Screen
          name="item1" // This is the name of the page and must match the file name 
          options={{
              drawerLabel: 'Logout',
              drawerIcon: ({ color, size }) => (
                <MaterialIcons 
                  name="logout" 
                  size={size} 
                  color={color}
                  style={{ transform: [{ scaleX: -1 }] }}
                />
              ),
          }}
        />
       <Drawer.Screen
          name="item2"  // This is the name of the page and must match the file name 
          options={{
              drawerLabel: 'Settings',
              headerTitle: 'Settings',
              drawerIcon: ({ color, size }) => (
                <MaterialIcons 
                  name="settings" 
                  size={size} 
                  color={color}
                />
              ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default Layout;
