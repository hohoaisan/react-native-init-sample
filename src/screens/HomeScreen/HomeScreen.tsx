import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Logo } from '@/components/Logo'

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo label="Expo" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
