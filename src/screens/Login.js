import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialHelperTextBox2 from '../components/MaterialHelperTextBox2';
import MaterialHelperTextBox3 from '../components/MaterialHelperTextBox3';
import MaterialButtonPink from '../components/MaterialButtonPink';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {store} from '../Store';
import {baseUrl} from '../config';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [state, dispatch] = useContext(store);

  const saveToken = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('saveToken Exception... ... ...', e);
    }
  };

  const handleSubmit = async () => {
    if (username === '' || password === '') {
      Toast.show('Input username and password！');
      return;
    }

    setLoading(true);

    const auth = {
      username,
      password,
    };

    await axios
      .get(baseUrl + 'login', {
        params: {},
        withCredentials: true,
        timeout: 60000,
        auth,
      })
      .then(async response => {
        console.log('respnse.data is ', response.data);

        if (response.data === 'Sucess') {
          dispatch({
            type: 'setAuth',
            payload: auth,
          });

          await saveToken('login', 'true');

          Toast.show('success!');
          props.navigation.navigate('PosMain');
        } else {
          Toast.show('Login failed!');
          setLoading(false);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log('error is ', error);
        Toast.show('Network error!');
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/logo-light.png')}
          resizeMode="contain"
          style={styles.logo}></Image>
        <Image
          source={require('../assets/images/logo-light-text.png')}
          resizeMode="contain"
          style={styles.logoName}></Image>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{marginLeft: 30, marginRight: 50}}>
        <MaterialHelperTextBox2
          proc={value => setUsername(value)}
          style={styles.usernameTextBox}></MaterialHelperTextBox2>
        <MaterialHelperTextBox3
          proc={value => setPassword(value)}
          style={styles.passwordTextBox}></MaterialHelperTextBox3>
      </KeyboardAvoidingView>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!loading && (
          <MaterialButtonPink
            style={styles.loginButton}
            proc={handleSubmit}></MaterialButtonPink>
        )}
        {loading && <ActivityIndicator></ActivityIndicator>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  usernameTextBox: {
    left: 1,
    width: 320,
    height: 78,
  },
  passwordTextBox: {
    left: 0,
    width: 320,
    height: 78,
  },
  logoName: {
    width: 200,
    height: 30,
    marginBottom: 50,
  },
  logo: {
    width: 96,
    height: 88,
    marginTop: 80,
  },
  loginButton: {
    marginTop: 50,
    width: 100,
    height: 36,
  },
});

export default Login;
