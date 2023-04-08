import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
// import reactNativeConfig from './react-native.config';
import MainContainer from './navigation/MainContainer';

function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       'Arcade': require('/Users/joannelin/FitstProject/assets/fonts/ARCADECLASSIC.ttf'),
  //     });
  //     setFontLoaded(true);
  //   }
  //   loadFont();
  // }, []);

  return (
    <MainContainer/>
  );
}

export default App;

