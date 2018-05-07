import React from 'react';
import PropTypes from 'prop-types';
import RNPopupDialog, { DialogTitle, SlideAnimation } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

class PopupDialog extends React.Component {
  componentDidMount() {
    this.popupDialog.show();
  }

  render() {
    const { title, children, height } = this.props;
    return (
      <RNPopupDialog
        height={height}
        dialogTitle={<DialogTitle title={title} />}
        dialogAnimation={slideAnimation}
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      >
        {children}
      </RNPopupDialog>
    );
  }
}

PopupDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  height: PropTypes.number,
};

PopupDialog.defaultProps = {
  height: 300,
};

export default PopupDialog;
