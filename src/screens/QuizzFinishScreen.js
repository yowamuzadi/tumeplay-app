import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import Colors from '../styles/Color';
import Styles from '../styles/Styles';

import User from '../services/User';
import useIsMounted from '../hooks/isMounted';

import PropTypes from 'prop-types';

QuizzFinishScreen.propTypes = {
  onOrder: PropTypes.func,
  availableTokens: PropTypes.number,
};

export default function QuizzFinishScreen(props) {
  const [availableTokens, setAvailableTokens] = useState(props.availableTokens);
  const [eventListener, setEventListener] = useState(false);

  const isMounted = useIsMounted();

  useEffect(() => {
    async function _fetchTokens() {
      const _tokens = await User.getTokensAmount();
      if (isMounted.current) {
        setAvailableTokens(_tokens);

        const _listener = EventRegister.addEventListener(
          'tokensAmountChanged',
          data => {
            setAvailableTokens(data);
          },
        );
        setEventListener(_listener);
      }

      return () => {
        EventRegister.removeEventListener(eventListener);
      };
    }
    console.log('PASS');
    _fetchTokens();
  }, [isMounted]);

  const headerStyle = StyleSheet.create({
    container: {},
    textContainer: {
      position: 'relative',
      paddingRight: 0,
      marginRight: 15,
      borderColor: '#123321',
      backgroundColor: 'transparent',
    },
    text: {
      borderRadius: 20,
      padding: 5,
      paddingTop: 8,
      paddingBottom: 5,
      textAlign: 'center',
      minWidth: 150,
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderColor: Colors.mainButton,
      color: Colors.mainButton,
      overflow: 'hidden',
      fontFamily: Colors.appTitleFont,
      zIndex: 0,
    },
    picture: {
      position: 'absolute',
      right: 0,
      top: -0,
      width: 38,
      height: 38,
    },
  });

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 7,
        backgroundColor: '#FEE7E3',
        position: 'relative',
      }}>
      <Image
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          resizeMode: 'contain',
        }}
        source={require('../assets/pictures/quizz-finish-background.png')}
      />

      <View style={{flex: 0.1}}></View>
      <View style={{flex: 0.15}}>
        <Text
          style={[
            Styles.finishText,
            {textDecorationColor: '#E55C22', textDecorationLine: 'underline'},
          ]}>
          Bravo !
        </Text>
      </View>
      <View style={{flex: 0.15, paddingLeft: 15, paddingRight: 15}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: Colors.mainButton,
          }}>
          Tu as gagné assez de points pour recevoir ton cadeau gratuitement !
        </Text>
      </View>

      <View style={{flex: 0.3, alignItems: 'center'}}>
        <Image
          style={Styles.PictureFinish}
          source={require('../assets/pictures/header-right.png')}
        />
        <Text style={[headerStyle.text, {height: 40, minHeight: 40}]}>
          {availableTokens} points !
        </Text>
      </View>

      <View style={{flex: 0.2}}></View>

      <View
        style={{position: 'absolute', width: '100%', bottom: 25, zIndex: 1}}>
        <TouchableOpacity
          style={[Styles.bottomButton, {borderRadius: 25}]}
          onPress={props.onOrder}>
          <Text style={Styles.bottomCommText}>Commander</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
