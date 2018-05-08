import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from '../Button';
import globalStyles from '../../styles';
import Text from '../Text';
import PopupDialog from '../PopupDialog';

class ProductNotFound extends React.Component {
  render() {
    const { onClose } = this.props;
    return (
      <PopupDialog title="Nie znaleziono produktu">
        <View style={globalStyles.container}>
          <View style={globalStyles.container}>
            <Text medium bold center>Przepraszamy, nie znaleziono produktu :(</Text>
          </View>
          <Button color="primary" title="OK" onPress={onClose} />
        </View>
      </PopupDialog>
    );
  }
}

ProductNotFound.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProductNotFound;
