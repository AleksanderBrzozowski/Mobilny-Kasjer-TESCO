import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from '../Button';
import PopupDialog from '../PopupDialog';
import Text from '../Text';
import globalStyles from '../../styles';

class RemoveProduct extends React.Component {
  render() {
    const { onRemove, onClose } = this.props;
    return (
      <PopupDialog title="Nie znaleziono produktu">
        <View style={globalStyles.container}>
          <View style={globalStyles.container}>
            <Text medium bold center>Czy na pewno chcesz usunąć produkt?</Text>
          </View>
          <Button color="primary" title="Usuń" onPress={onRemove} />
          <Button color="secondary" title="Zamknij" onPress={onClose} />
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
