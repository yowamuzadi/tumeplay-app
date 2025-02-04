import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {EventRegister} from 'react-native-event-listeners';

import Backlink from '../components/tunnel/Backlink';
import ProductContentList from '../components/tunnel/ProductContentList';

import RemoteApi from '../../services/RemoteApi';
import UserService from '../../services/User';

import Styles from '../../styles/Styles';

import TunnelCartSummaryStyle from '../../styles/components/TunnelCartSummary';

TunnelCartSummary.propTypes = {
  navigation: PropTypes.object,
};

export default function TunnelCartSummary(props) {
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [userAdress] = useState(props.navigation.state.params.userAdress);

  async function _confirmOrder() {
    const _isSuccess = await RemoteApi.confirmOrder(selectedItem);
    if (_isSuccess) {
      const _newTokens = await UserService.subTokens(200);

      EventRegister.emit('tokensAmountChanged', _newTokens);
    }
  }

  function _onDone() {
    _confirmOrder();
    props.navigation.navigate('TunnelOrderConfirm', {
      selectedItem: selectedItem,
      userAdress: userAdress,
    });
  }

  function _goBack() {
    props.navigation.navigate('TunnelUserAddress', {
      selectedItem: selectedItem,
      userAdress: userAdress,
    });
  }

  return (
    <ScrollView style={[Styles.flexOne, TunnelCartSummaryStyle.container]}>
      <Backlink step={4} onPress={_goBack} />

      <View style={{flex: 0.1}}>
        <Text style={Styles.tunnelTitle}>Ton récapitulatif</Text>
      </View>
      <View style={TunnelCartSummaryStyle.splitterWrapper}>
        <Image
          style={TunnelCartSummaryStyle.splitterPicture}
          source={require('../../assets/pictures/splitter.png')}
        />
      </View>
      <View style={{flex: 0.2, marginBottom: 15}}>
        <Text style={TunnelCartSummaryStyle.title}>Tes articles</Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 7,
            justifyContent: 'center',
          }}>
          <View style={{flex: 0.35}}>
            <Image
              source={selectedItem.picture}
              style={{
                height: 150,
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
                resizeMode: 'cover',
                width: '100%',
              }}
            />
          </View>
          <View style={{flex: 0.65, paddingLeft: 5}}>
            <Text style={TunnelCartSummaryStyle.productTitle}>
              {selectedItem.title}
            </Text>
            <ProductContentList shortMode={true} item={selectedItem} />
          </View>
        </View>
      </View>
      <View style={TunnelCartSummaryStyle.splitterWrapper}>
        <Image
          style={TunnelCartSummaryStyle.splitterPicture}
          source={require('../../assets/pictures/splitter.png')}
        />
      </View>
      <View style={{flex: 0.15}}>
        <View style={{flex: 0.2}}>
          <Text style={TunnelCartSummaryStyle.title}>Adresse de livraison</Text>
        </View>
        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <View>
            <Image
              style={TunnelCartSummaryStyle.pictureAndTextPicture}
              source={require('../../assets/pictures/map-pin.png')}
            />
          </View>
          <View>
            <Text
              style={[
                TunnelCartSummaryStyle.subTitle,
                TunnelCartSummaryStyle.emailAdress,
              ]}>
              {userAdress.firstName} {userAdress.lastName}
            </Text>
            <Text style={[TunnelCartSummaryStyle.subTitle]}>
              {userAdress.adress}
            </Text>
          </View>
        </View>
      </View>
      <View style={TunnelCartSummaryStyle.splitterWrapper}>
        <Image
          style={TunnelCartSummaryStyle.splitterPicture}
          source={require('../../assets/pictures/splitter.png')}
        />
      </View>
      <View style={{flex: 0.15}}>
        <Text style={[TunnelCartSummaryStyle.subTitle, {marginBottom: 8}]}>
          Nous t&apos;enverrons un mail pour t&apos;informer de
          l&apos;expédition de ta commande à :
        </Text>
        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <Image
            style={TunnelCartSummaryStyle.pictureAndTextPicture}
            source={require('../../assets/pictures/letterbox.png')}
          />

          <Text
            style={[
              TunnelCartSummaryStyle.subTitle,
              TunnelCartSummaryStyle.emailAdress,
            ]}>
            {userAdress.emailAdress}
          </Text>
        </View>
        <Text style={[TunnelCartSummaryStyle.subTitle, {marginTop: 10}]}>
          * Livraison prévue entre le XX et le XX
        </Text>
      </View>

      <View style={{flex: 0.25, height: 60, marginTop: 15, marginBottom: 25}}>
        <TouchableOpacity
          style={{
            flex: 1,

            paddingTop: 2,
            paddingBottom: 2,
            width: '50%',
            maxHeight: 70,
            alignSelf: 'center',
          }}
          onPress={_onDone}>
          <View style={Styles.tunnelButton}>
            <Text style={Styles.tunnelButtonText}>Valider</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
