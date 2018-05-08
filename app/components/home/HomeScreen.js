import { Image, View, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import TescoLogo from '../../assets/tesco.png';
import Button from '../Button';
import globalStyles from '../../styles';

const styles = StyleSheet.create({
  logo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
      <View style={globalStyles.container}>
        <View style={styles.logo}>
          <Image source={TescoLogo} />
        </View>
        <Button onPress={() => navigation.navigate('Shopping')} title="Rozpocznij zakupy" />
        <Button onPress={() => navigation.navigate('ExploreShopping')} title="Przeglądaj zakupy" color="secondary" />
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
