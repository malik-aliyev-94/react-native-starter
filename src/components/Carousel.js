import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, Text, Image } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const entries = [
  {
      title: 'Title #1',
      subtitle: 'Description #1',
      illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
      title: 'Title #2',
      subtitle: 'Description #2',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
      title: 'Title #3',
      subtitle: 'Description #3',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
      title: 'Title #4',
      subtitle: 'Description #4',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
];

const renderItem = ({item, index}) => {
  return (
      <View style={{flex: 1, width:236, height: 236, justifyContent: 'center', margin:10, borderRadius: 10, marginBottom:60, backgroundColor: '#FFF', shadowOffset:{  width: 0,  height: 10 }, shadowColor: '#AAA', shadowOpacity: .3, shadowRadius: 5}}>
          <View style={{flex: 2, width: 236, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden'}}>
            <Image
              resizeMode="cover"
              style={{flex: 1, width: 236}}
              source={{ uri: item.illustration }} />
          </View>
          <View style={{flex: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden', padding:10, justifyContent:'center', alignItems:'center'}}>
            <Text style={{flex:1, fontSize: 20, backgroundColor: '#fff'}}>{ item.title }</Text>
            <Text style={{flex:1, fontSize: 14, backgroundColor: '#fff'}}>{ item.subtitle }</Text>
          </View>
      </View>
  );
}

const CarouselSlider = () => (
  <Carousel
    ref={(c) => { this._carousel = c; }}
    data={entries}
    renderItem={renderItem}
    sliderWidth={deviceWidth}
    itemWidth={256}
    layout={'default'}
    firstItem={1}
    inactiveSlideScale={1}
  />
);

export default CarouselSlider;
