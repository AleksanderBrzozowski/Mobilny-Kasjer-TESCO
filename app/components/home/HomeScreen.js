import { Image, View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import TescoLogo from '../../assets/tesco.png';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    justifyContent: 'flex-end',
  },
});

const HomeScreen = ({ navigation }) => (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={TescoLogo} />
        </View>
        <View style={styles.buttonGroup}>
          <Button onPress={() => navigation.navigate('Shopping')} title="Rozpocznij zakupy" />
          <Button onPress={() => {}} title="Przeglądaj zakupy" color="secondary" />
        </View>
      </View>
);

HomeScreen.navigationOptions = {
  title: 'Mobilny Kasjer TESCO',
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
