import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './Components/Home/Home';
import { colors } from './theme/colors';
import { spacing } from './theme/spacing';



export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.menu}><Image source={require('./assets/native-logo.svg')}  style={{ width: 100, height: 100 }}/></View>
              
          <View >
          <Home />
          </View>
          <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu:{
flex:1,
alignItems: 'start',
justifyContent: 'start',
  },
  text:{
    color: colors.paraColor,
    padding: spacing[9],
    borderWidth: 2,
    borderColor: colors.logoBackground
  }
});
