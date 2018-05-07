import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});

class ScanProduct extends React.Component {
  static propTypes = {
    onBarCodeRead: PropTypes.func.isRequired,
  };

  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { onBarCodeRead } = this.props;
    return (
      <Camera
        type={Camera.Constants.Type.back}
        style={styles.camera}
        onBarCodeRead={({ data }) => onBarCodeRead(data)}
        barCodeTypes={[Camera.Constants.BarCodeType.ean13]}
      />
    );
  }
}

export default ScanProduct;
