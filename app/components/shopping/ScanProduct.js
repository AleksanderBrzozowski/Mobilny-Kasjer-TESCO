import React from 'react';
import { StyleSheet, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
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
    const { status } = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    this.setState({ hasCameraPermission: status === PermissionsAndroid.RESULTS.GRANTED });
  }

  render() {
    const { onBarCodeRead } = this.props;
    return (
      <RNCamera
        type={RNCamera.Constants.Type.back}
        style={styles.camera}
        onBarCodeRead={({ data }) => onBarCodeRead(data)}
        barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
      />
    );
  }
}

export default ScanProduct;
