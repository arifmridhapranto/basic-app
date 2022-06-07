import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home/Home';
import { colors } from './theme/colors';
import { spacing } from './theme/spacing';


export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Image
        
        source={require('./assets/Box.svg')}
      />
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <View>
      <Home/>
      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
   
    // borderWidth:10,
  },
  text:{
    color: colors.paraColor,
    padding: spacing[9],
    borderWidth: 2,
    borderColor: colors.logoBackground
  }
});
