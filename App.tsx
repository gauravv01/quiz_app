import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/index';

export default function App() {
  return (
      <NavigationContainer><MyStack /></NavigationContainer>
    );
  };  

const styles = StyleSheet.create({});
