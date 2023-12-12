import React from 'react';
import {ScrollView} from 'react-native';
import HeaderMain from '../../components/HeaderMain/index';
import BannerCarousel from '../../components/BannerCarousel/index';
import MainCategories from '../../components/MainCategories';
function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: '#f5f5f5'}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}

export default index;
