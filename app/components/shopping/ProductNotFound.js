import React from 'react';
import PropTypes from 'prop-types';
import PopupDialog, { DialogTitle, SlideAnimation } from 'react-native-popup-dialog';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.2,
  },
});

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class ProductNotFound extends React.Component {
  componentDidMount() {
    this.popupDialog.show();
  }

  render() {
    const { onClose } = this.props;
    return (
      <PopupDialog
        dialogTitle={<DialogTitle title="Nie znaleziono produktu" />}
        dialogAnimation={slideAnimation}
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      >
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text>Przepraszamy, nie znaleziono produktu :(</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button color="primary" title="OK" onPress={onClose} />
          </View>
        </View>
      </PopupDialog>
    );
  }
}

ProductNotFound.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProductNotFound;
