import { Button, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { Link, useRouter } from 'expo-router';

const TabOneScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Button title="View Disclaimer" onPress={() => router.push("/(aux)/disclaimer")} />
      <Button title="Open Details Page" onPress={() => router.push("/(tabs)/(one)/details")} />
      <Button title="Open Details 42" onPress={() => router.push("/(one)/42")} />
      <Button title="Open Details 1337" onPress={() => router.push("/(one)/1337")} />
      <Button title="Modal" onPress={() => router.push("/(one)/modal")} />
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
