import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import MaterialButtonPink1 from '../components/MaterialButtonPink1';
import MaterialHeader11 from '../components/MaterialHeader11';
import MaterialCardWithImageAndTitle3 from '../components/MaterialCardWithImageAndTitle3';
import UntitledComponent from '../components/UntitledComponent';
import CartItem from '../components/CartItem';

import axios from 'axios';
import {baseUrl, homeUrl} from '../config';
import {store} from '../Store';

function PosMain(props) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useContext(store);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <MaterialHeader11 style={styles.header}></MaterialHeader11>
      <MaterialCardWithImageAndTitle3
        style={styles.addProduct}
        proc={() => {
          props.navigation.navigate('ProductList');
        }}></MaterialCardWithImageAndTitle3>

      <ScrollView styles={styles.productDisplay}>
        {state.cart &&
          state.cart.map((item, i) => (
            <CartItem
              key={i}
              item={item}
              plus={() => {
                dispatch({type: 'plusCart', payload: item});
              }}
              minus={() => {
                dispatch({type: 'minusCart', payload: item});
              }}></CartItem>
          ))}
      </ScrollView>

      <UntitledComponent></UntitledComponent>

      <MaterialButtonPink1
        style={styles.chargeButton}
        proc={async () => {
          const today = new Date();
          const todayStr =
            today.getDate() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getFullYear();

          await axios
            .post(homeUrl + 'cashsale', {
              date: todayStr,
              product: state.cart,
            })
            .then(function(response) {
              console.log(response.data);
            })
            .catch(function(error) {
              console.log(error);
            });
        }}></MaterialButtonPink1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chargeButton: {
    width: 100,
    height: 36,
  },
  header: {
    width: 375,
    height: 56,
  },
  addProduct: {
    top: 10,
    width: 376,
    height: 76,
  },
  productDisplay: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,1)',
  },
});

export default PosMain;
