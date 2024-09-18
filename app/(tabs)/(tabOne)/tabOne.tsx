import { Button, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { useRouter } from 'expo-router';

const TabOneScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Button title="View Disclaimer" onPress={() => router.push("/(aux)/disclaimer")} />
      <Button title="Open Details Page" onPress={() => router.push("/(tabs)/(tabOne)/details")} />
      <Button title="Open Details 42" onPress={() => router.push("/(tabOne)/42")} />
      <Button title="Open Details 1337" onPress={() => router.push("/(tabOne)/1337")} />
      <Button title="Modal" onPress={() => router.push("/(tabOne)/modal")} />
      <Button title="Logout" onPress={() => router.replace("/")} />
    </View>
  );
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
