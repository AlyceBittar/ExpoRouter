import { View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const LoginPage = () => {
    const router = useRouter();

  return (
    <View>
      <Button title="View Disclaimer" onPress={() => router.push("/(aux)/disclaimer")} />
      <Button title="Create Account" onPress={() => router.push("/register")} />
      <Button title="Login" onPress={() => router.replace("/(tabs)/(tabOne)/tabOne")} />
    </View>
  )
}

export default LoginPage