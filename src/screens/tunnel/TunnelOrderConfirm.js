import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';

import Colors from '../../styles/Color';

import Styles from '../../styles/Styles';

TunnelOrderConfirm.propTypes = {
  navigation: PropTypes.object,
};

export default function TunnelOrderConfirm(props) {
  function _onDone() {
    props.navigation.navigate('LandingScreen');
  }

  return (
    <View
      style={[
        Styles.flexOne,
        {
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
        },
      ]}>
      <View style={{flex: 0.5}}>
        <Image
          style={[Styles.contentPicture, {minHeight: 250}]}
          source={require('../../assets/pictures/boarding/boarding-6.jpeg')}
        />
      </View>

      <View
        style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={[
            Styles.tunnelTitle,
            Styles.textCenter,
            {zIndex: 4, fontSize: 33},
          ]}>
          Ta commande a bien été prise en compte !
        </Text>
        <Image
          style={{
            width: '90%',
            marginTop: -12,
          }}
          source={require('../../assets/pictures/line.png')}
        />
      </View>
      <View style={{flex: 0.15, marginTop: 30}}>
        <Text
          style={[
            Styles.text,
            Styles.textCenter,
            {color: Colors.mainButton, fontSize: 26},
          ]}>
          A bientôt !
        </Text>
      </View>
      <View
        style={{
          flex: 0.12,
          paddingTop: 2,
          paddingBottom: 2,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: 60,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingTop: 2,
            paddingBottom: 2,
            width: '40%',
            height: 60,
          }}
          onPress={_onDone}>
          <View style={Styles.tunnelButton}>
            <Text style={Styles.tunnelButtonText}>Fermer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
