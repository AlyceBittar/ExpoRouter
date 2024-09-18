import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen  
          name='tabOne' // Name of file to route to (file-based routing)
          options={{
            title: 'Home' // Header title for this screen
          }}
        />
        <Stack.Screen  
          name='details' // Name of file to route to (file-based routing)
          options={{
            title: 'Details' // Header title for this screen
          }}
        />
        <Stack.Screen  
          name='[id]' // Name of file to route to (file-based routing)
          options={{
            title: '[id]' // Header title for this screen
          }}
        />
        <Stack.Screen  
          name='modal' // Name of file to route to (file-based routing)
          options={{
            title: 'Modal', // Header title for this screen
            presentation: 'modal'
          }}
        />
    </Stack>
  )
}

export default Layout