import React, {useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import {AppLoading} from 'expo';
// import * as Font from 'expo-font';
import Login from './src/screens/Login';
import PosMain from './src/screens/PosMain';
import ProductList from './src/screens/ProductList';

import {StateProvider} from './src/Store';

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  PosMain: PosMain,
  ProductList: ProductList,
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation,
    },
    Login: Login,
    PosMain: PosMain,
    ProductList: ProductList,
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // if (!isLoadingComplete) {
  //   return (
  //     <AppLoading
  //       startAsync={loadResourcesAsync}
  //       onError={handleLoadingError}
  //       onFinish={() => handleFinishLoading(setLoadingComplete)}
  //     />
  //   );
  // } else {
  //   return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  // }
  return (
    <StateProvider>
      <AppContainer />
    </StateProvider>
  );
}
async function loadResourcesAsync() {
  // await Promise.all([
  //   Font.loadAsync({
  //     "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
  //   })
  // ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
