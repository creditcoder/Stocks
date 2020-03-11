import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MaterialHeader11 from '../components/MaterialHeader11';
import MaterialSearchBar from '../components/MaterialSearchBar';
import ProductItem from '../components/ProductItem';

import {ConfirmDialog} from 'react-native-simple-dialogs';
import axios from 'axios';
import {baseUrl} from '../config';
import {store} from '../Store';
import {TouchableOpacity} from 'react-native-gesture-handler';

function ProductList(props) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useContext(store);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [key, setKey] = useState('');

  const [currentId, setCurrentId] = useState(-1);
  const [sn, setSn] = useState('');

  const getList = () => {
    console.log('state.auth = ', state.auth);

    setLoading(true);
    axios
      .get(baseUrl + 'stocks', {
        params: {
          key,
        },
        withCredentials: true,
        timeout: 60000,
        auth: state.auth,
      })
      .then(function(response) {
        dispatch({type: 'setStocks', payload: response.data});
      })
      .catch(function(error) {
        console.log('error=', error);
      })
      .finally(function() {
        // always executed
        setLoading(false);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [key]);

  return (
    <View style={styles.container}>
      <MaterialHeader11 style={styles.header}></MaterialHeader11>
      <MaterialSearchBar
        proc={value => {
          console.log('search key is ', value);
          setKey(value);
        }}
        style={styles.productSearch}></MaterialSearchBar>

      {loading && <ActivityIndicator></ActivityIndicator>}
      {!loading && (
        <ScrollView
          styles={{
            flexDirection: 'column',
          }}>
          {state.stocks &&
            state.stocks.map((item, i) => (
              <ProductItem
                key={i}
                item={item}
                proc={() => {
                  dispatch({
                    type: 'addCart',
                    payload: {
                      product_Id: item.id,
                      productName: item.productName,
                      quantity: 1,
                      SellingPrice: item.sellingPrice,
                    },
                  });
                  if (!item.serialNumber) {
                    setCurrentId(i);
                    setSn('');
                    setDialogVisible(true);
                  }
                  props.navigation.navigate('PosMain', {item});
                }}></ProductItem>
            ))}
        </ScrollView>
      )}
      <ConfirmDialog
        visible={dialogVisible}
        title="Input the Serial Number"
        onTouchOutside={() => setDialogVisible(false)}
        positiveButton={{
          title: 'Confirm',
          onPress: () => {
            if (!sn) {
              alert('Input serial number');
            } else {
              dispatch({type: 'updateStock', payload: {currentId, sn}});

              setDialogVisible(false);
            }
          },
        }}
        negativeButton={{
          title: 'Cancel',
          onPress: () => {
            setDialogVisible(false);
          },
        }}>
        <View>
          <TextInput
            value={sn}
            style={{backgroundColor: '#eee'}}
            onChangeText={value => {
              setSn(value);
            }}></TextInput>
        </View>
      </ConfirmDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
  },
  productSearch: {
    left: 0,
    width: 375,
    height: 56,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductList;
