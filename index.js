import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },

  progressBar: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  nocontainer: {
    position: 'absolute',    
    top: 0,    
    left: 0,        
    width: 0.001,
    height: 0.001
  },

  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },

  text: {
    marginTop: 8
  }
});

class BusyIndicator extends Component {

  render() {
    const { isVisible, text } = this.props
    if (!isVisible) {
      return (<View style={styles.nocontainer} />);
    }

    const customStyles = StyleSheet.create({
      overlay: {
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight
      },
      
      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize
      }
    });
    return (
      <View style={styles.container}>
        <View style={[styles.overlay, customStyles.overlay]}>
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={styles.progressBar} />
          {
            text
              ? <Text
                  numberOfLines={this.props.textNumberOfLines}
                  style={[styles.text, customStyles.text]}>
                  {text}
                </Text>
              : null
          }
        </View>
      </View>
    );
  }
}

BusyIndicator.propTypes = {
  color: PropTypes.string,
  overlayColor: PropTypes.string,
  overlayHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overlayWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'large']),
  isVisible: PropTypes.bool,
  text: PropTypes.string,
  textColor: PropTypes.string,
  textFontSize: PropTypes.number,
  textNumberOfLines: PropTypes.number
};

BusyIndicator.defaultProps = {
  isDismissible: false,
  overlayWidth: 120,
  overlayHeight: 100,
  overlayColor: '#333333',
  color: '#f5f5f5',
  size: 'small',
  isVisible: false,
  text: '',
  textColor: '#f5f5f5',
  textFontSize: 14,
  textNumberOfLines: 1
};

module.exports = BusyIndicator;
