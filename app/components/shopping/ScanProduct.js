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
    navigation: PropTypes.shape({}).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
  };

  async componentWillMount() {
    const { status } = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    this.setState({ hasCameraPermission: status === PermissionsAndroid.RESULTS.GRANTED });
  }

  onBarCodeRead = (barcode) => {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.onBarCodeRead(barcode);
  };

  render() {
    return (
      <RNCamera
        type={RNCamera.Constants.Type.back}
        style={styles.camera}
        onBarCodeRead={({ data }) => this.onBarCodeRead(data)}
        barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
      />
    );
  }
}

export default ScanProduct;
