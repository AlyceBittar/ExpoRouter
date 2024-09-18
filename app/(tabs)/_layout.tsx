import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name='(tabOne)'
                options={{
                    title: 'Home', // What is displayed in the header
                    headerShown: false, // Hide the header, since navigation stack shows an extra header
                    tabBarLabel: 'Home', // What is displayed in the TabBar/footer
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='home' size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name='tabTwo'
                options={{
                    title: 'Profile', // What is displayed in the header
                    tabBarLabel: 'Profile', // What is displayed in the TabBar/footer
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='person' size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen 
                name='(tabThree)'
                options={{
                    title: 'Settings', // What is displayed in the header
                    headerShown: false, // Hide the header, since navigation stack shows an extra header
                    tabBarLabel: 'Settings', // What is displayed in the TabBar/footer
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name='settings' size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    );

}

export default Layout