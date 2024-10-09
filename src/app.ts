import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import { AppProvider } from './context/AppContext';

Object.defineProperty(global, '__DEV__', { value: false });

ReactNativeScript.start(
  React.createElement(
    AppProvider,
    {},
    React.createElement(MainStack, {}, null)
  )
);