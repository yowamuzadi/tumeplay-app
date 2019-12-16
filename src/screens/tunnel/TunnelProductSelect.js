import React, {useState, useEffect, forwardRef} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import Styles from '../../styles/Styles';

import RemoteApi from '../../services/RemoteApi';

import CustomFooter from '../CustomFooter';
import ContactButton from '../components/global/ContactButton';
import ProductCard from '../components/tunnel/ProductCard';
import ProductModal from '../components/tunnel/ProductModal';
import ProductSelectHeader from '../components/tunnel/ProductSelectHeader';

import useIsMounted from '../../hooks/isMounted';

TunnelProductSelect.propTypes = {
  navigation: PropTypes.object,
};
export default function TunnelProductSelect(props) {
  const [selectedItem, setSelectedItem] = useState(false);
  const [localProducts, setLocalProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    async function _fetchProducts() {
      const _products = await RemoteApi.fetchProducts();

      if (isMounted.current) {
        setLocalProducts(_products);
      }
    }

    _fetchProducts();
  }, [isMounted]);

  function _onProductClicked(selectedItem) {
    setSelectedItem(selectedItem);
    setShowModal(true);
  }

  function _toggleModal() {
    setShowModal(!showModal);
  }

  const ForwardedProductModal = forwardRef(() => (
    <ProductModal
      onOrder={_onOrder}
      showModal={showModal}
      item={selectedItem}
      onClose={_toggleModal}
    />
  ));

  function _onOrder() {
    setShowModal(false);
    props.navigation.navigate('TunnelDeliverySelect', {
      selectedItem: selectedItem,
    });
  }

  function _renderProductsCards() {
    return localProducts.map((item, key) => {
      return (
        <ProductCard
          key={key}
          item={item}
          onPress={() => _onProductClicked(item)}
        />
      );
    });
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
        <ScrollView style={{flex: 0.9}}>
          <ProductSelectHeader />

          {_renderProductsCards()}

          <ContactButton />

          <CustomFooter />
        </ScrollView>
        <ForwardedProductModal />
      </View>
    </SafeAreaView>
  );
}