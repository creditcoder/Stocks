import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {store} from '../Store';

function UntitledComponent(props) {
  const [state, dispatch] = useContext(store);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = state.cart.reduce(
      (acc, curr) => acc + curr.SellingPrice * curr.quantity,
      0,
    );

    setTotal(sum);
  }, [state.cart]);

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect1}>
          <Text style={styles.subtotal}>Subtotal:{total}</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.taxes}>Taxes:{total * 0.07}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rect: {
    width: 374,
    height: 147,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  rect1: {
    width: 374,
    height: 66,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  subtotal: {
    color: '#121212',
    fontFamily: 'roboto-regular',
    marginTop: 29,
    marginLeft: 24,
  },
  rect2: {
    width: 374,
    height: 66,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 7,
  },
  taxes: {
    color: '#121212',
    fontFamily: 'roboto-regular',
    marginTop: 26,
    marginLeft: 24,
  },
});

export default UntitledComponent;
