import React, {createContext, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import axios from 'axios';

import {baseUrl} from './config';

const initialState = {
  auth: {username: '', password: ''},
  stocks: [],
  cart: [],
};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'setAuth': {
        return {...state, auth: action.payload};
      }
      case 'setStocks': {
        return {...state, stocks: action.payload};
      }
      case 'updateStock': {
        return {
          ...state,
          stocks: state.stocks.map(x =>
            x.id === action.payload.currentId
              ? {...x, serialNumber: action.payload.sn}
              : x,
          ),
        };
      }
      case 'addCart': {
        return {
          ...state,
          cart: Array.from(
            new Set(
              [action.payload, ...state.cart].map(x => JSON.stringify(x)),
            ),
          ).map(x => JSON.parse(x)),
        };
      }
      case 'plusCart': {
        return {
          ...state,
          cart: state.cart.map(x =>
            x.product_Id === action.payload.product_Id
              ? {...x, quantity: x.quantity + 1}
              : x,
          ),
        };
      }
      case 'minusCart': {
        return {
          ...state,
          cart: state.cart.map(x =>
            x.product_Id === action.payload.product_Id
              ? x.quantity > 1
                ? {...x, quantity: x.quantity - 1}
                : x
              : x,
          ),
        };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export {store, StateProvider};
