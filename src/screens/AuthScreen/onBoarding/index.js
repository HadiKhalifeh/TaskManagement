import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../assets/Colors';

import styles from './styles';
import FastDelivery from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');

export default function OnBoarding() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListTutorialRef = useRef();
  const flatListRef = useRef();
  const navigation = useNavigation();
  const flatlistAnimated = useRef(new Animated.Value(0)).current;
  const tutorial = [
    {
      image: 'shipping-fast',
      message: 'FAST SERVICE',
    },
    {
      image: 'coins',
      message: 'CHEAP FEES',
    },
    {
      image: 'security',
      message: 'SECURITY',
    },
  ];
  const renderIndicator = index => {
    const countableWidth = width / 1.12275;
    return (
      <View
        style={{
          width: height / 90.5,
          height: height / 90.5,
          borderRadius: width / 93.75,
          marginRight: 3,
          marginLeft: 3,
          margin: height / 60,
          backgroundColor: 'rgb(216, 216, 216)',
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            width: width / 46.875,
            height: width / 46.875,
            borderRadius: width / 93.75,
            opacity: flatlistAnimated.interpolate({
              inputRange: [
                countableWidth * index - countableWidth,
                countableWidth * index,
                countableWidth * index + countableWidth,
              ],
              outputRange: [0, 1, 0],
            }),
            backgroundColor: Colors.secondary,
          }}
        />
      </View>
    );
  };

  const renderIndicators = () => {
    let body = [];
    tutorial.forEach((item, index) => body.push(renderIndicator(index)));

    return (
      <View
        style={{
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          // zIndex: 10,
          // height: height / 100,
        }}>
        {body}
      </View>
    );
  };

  const renderPhoneImage = (item, index) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
        }}>
        {index == 2 ? (
          <Icon name={item.image} size={100} color={Colors.primary} />
        ) : (
          <FastDelivery name={item.image} size={100} color={Colors.primary} />
        )}
      </View>
    );
  };

  const renderMessage = (item, index) => {
    return (
      <View style={styles.tutorialMessageContainer}>
        <Text style={styles.tutorialMessage}>{item.message.toUpperCase()}</Text>
      </View>
    );
  };

  const goToNextScreen = () => {
    try {
      setSelectedIndex(selectedIndex + 1);
      flatListRef.current.scrollToIndex({index: selectedIndex + 1});
      flatListTutorialRef.current.scrollToIndex({index: selectedIndex + 1});
    } catch (err) {
      console.log(err, 'errro');
      err;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.FlatList
        ref={flatListTutorialRef}
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={styles.tutorialImageListComponentContainer}
        data={tutorial}
        renderItem={({item, index}) => renderPhoneImage(item, index)}
        //  style={styles.tutorialImageList}
        bounces={false}
        /*  onScroll={Animated.event(
          // Animated.event returns a function that takes an array where the first element...
          [{nativeEvent: {contentOffset: {x: flatlistAnimated}}}],
          {
            listener: event => {
              let value = event.nativeEvent.contentOffset.x;

              setSelectedIndex(
                Math.round((value + width / 3.7) / (width / 1.12275)),
              );
              try {
                flatListRef.current.scrollToIndex({
                  index: value / (width / 1.12275),
                  animated: false,
                });
              } catch (err) {
                err;
              }
            },
            useNativeDriver: true, // <- Native Driver used for animated events
          },
        )} */
      />
      <View style={styles.messageButtonContainer}>
        {renderIndicators()}
        <FlatList
          ref={flatListRef}
          horizontal={true}
          scrollEnabled={false}
          data={tutorial}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => renderMessage(item, index)}
          style={styles.tutorialMessageList}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setSelectedIndex(selectedIndex + 1),
              selectedIndex !== 2
                ? goToNextScreen()
                : navigation.navigate('Auth');
          }}
          style={styles.letsGoButton}>
          <Text style={styles.letsGoText}>
            {selectedIndex < 2 ? 'Next' : `LET'S GO`}
          </Text>
        </TouchableOpacity>
        {/*   <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EnterPhoneScreen')}
          style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
