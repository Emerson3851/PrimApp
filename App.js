import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Parabens você apertou no botão!");
  }
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Bem vindo ao seu primeiro aplicativo!</Text>
      <Button title='Aperte Aqui' onPress={handlePress} color="green" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
