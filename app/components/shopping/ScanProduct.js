import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';
import globalStyles from '../../styles';

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
        style={globalStyles.container}
        onBarCodeRead={({ data }) => this.onBarCodeRead(data)}
        barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
      />
    );
  }
}

export default ScanProduct;
