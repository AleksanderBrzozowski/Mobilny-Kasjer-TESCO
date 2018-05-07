import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Button from '../Button';
import PopupDialog from '../PopupDialog';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    flex: 0.4,
  },
  buttonWrapper: {
    flex: 0.6,
  },
});

class RemoveProduct extends React.Component {
  render() {
    const { onRemove, onClose } = this.props;
    return (
      <PopupDialog title="Nie znaleziono produktu">
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text medium bold center color="primary">Czy na pewno chcesz usunąć produkt?</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button color="primary" title="Usuń" onPress={onRemove} />
            <Button color="secondary" title="Zamknij" onPress={onClose} />
          </View>
        </View>
      </PopupDialog>
    );
  }
}

RemoveProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default RemoveProduct;
