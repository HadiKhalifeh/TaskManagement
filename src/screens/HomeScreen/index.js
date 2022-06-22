import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import Colors from '../../assets/Colors';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import Cards from '../../components/Cards';
const {width, height} = Dimensions.get('window');
const DATA = [
  {
    title: 'About Us',
    data: [
      {
        id: 1,
        title: 'haha',
        text: 'blabla',
        img: require('../../assets/Images/menu.png'),
      },
    ],
  },
  {
    title: 'Announcements',
    data: [
      {id: 1, name: 'haha', text: 'blabla'},
      {id: 2, name: 'haha', text: 'blabla'},
    ],
  },
  {
    title: 'Documents',
    data: [{id: 1, name: 'haha', text: 'blabla'}],
  },
];
const data0 = [
  {id: 1, date: '2021/07/14', no: 11},
  {id: 2, date: '2021/07/14', no: 12},
  {id: 3, date: '2021/07/14', no: 13},
];
const data1 = [
  {
    id: 1,
    text: 'Announcement text goes here.Announcement text goes here Announcement text goes here Announcement text goes here',
  },
  {
    id: 2,
    text: 'Announcement text goes here.Announcement text goes here Announcement text goes here Announcement text goes here',
  },
];
const location = [
  {id: 1, name: 'Fast Service'},
  {id: 2, name: 'Safe'},
  {id: 3, name: 'Secure'},
];
const text = [
  {
    id: 1,
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
  {
    id: 2,
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
];
const about = [{id: 1}];
export default function HomeScreen() {
  const navigation = useNavigation();
  const [isGuest, setIsGuest] = useState(true);
  const [scrollY] = useState(new Animated.Value(0));
  const [position, setPosition] = useState(scrollY);

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });
  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });
  useEffect(() => {
    console.log(scrollY, 'pp');
  }, [scrollY]);
  const renderData1 = ({index, item}) => {
    return (
      <Cards
        onPress={() => navigation.navigate('Details')}
        title="Announcement"
        id={item.id}
        subtitle={item.text}
      />
    );
  };
  const renderData0 = ({index, item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.primary,
          width: 330,
          height: 140,
          padding: 10,
          margin: 10,
          borderRadius: 20,
        }}>
        <Text
          style={{
            //fontFamily: 'HelveticaRegular',
            fontSize: 15,
            color: Colors.white,
            fontWeight: 'bold',
          }}>
          Date:{item.date}
        </Text>
        <Text
          style={{
            //fontFamily: 'HelveticaRegular',
            fontSize: 15,
            color: Colors.white,
            fontWeight: 'bold',
          }}>
          Visit No:{item.no}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={{
            width: 141,
            height: 43,
            backgroundColor: Colors.secondary,
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              //fontFamily: 'HelveticaRegular',
              fontSize: 15,
              color: Colors.white,
              fontWeight: 'bold',
            }}>
            View More
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: index === 0 ? Colors.white : Colors.secondary,
          width: width,
          alignItems: 'center',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Text
          style={{
            paddingTop: 31,
            paddingLeft: 25,

            fontSize: 20,
            //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            color: Colors.primary,
          }}>
          {index === 0 ? 'Last Visit' : 'Announcements'}
        </Text>
        <FlatList
          style={{flex: 1, marginBottom: index === 0 ? 40 : 0}}
          data={index === 0 ? data0 : data1}
          keyExtractor={item => item.id.toString()}
          renderItem={index === 0 ? renderData0 : renderData1}
        />
      </View>
    );
  };
  const renderLocationRow = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          marginRight: 34,
          marginBottom: 32,
          marginTop: index < 2 ? 50 : 0,
          flexDirection: 'row',
        }}>
        <Icon
          name="location-pin"
          size={18}
          color={Colors.primary}
          style={{paddingRight: 7}}
        />
        <Text
          style={{
            fontSize: 14,
            ////fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            color: Colors.white,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderAboutus = ({item}) => {
    return (
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
          paddingLeft: 20,
          backgroundColor: Colors.white,
        }}>
        <Text
          style={{
            paddingTop: 30,

            fontSize: 20,
            // //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            color: Colors.primary,
          }}>
          About Us
        </Text>
        <Image
          style={{
            width: 224,
            height: 224,
            marginTop: 34,
            marginBottom: 30,
          }}
          source={{uri: 'https://dummyimage.com/224x224/fff/aaa'}}
        />
        <Text
          style={{
            fontSize: 12,
            //    //fontFamily: 'HelveticaRegular',
            fontWeight: 'bold',
            opacity: 0.6,
            color: Colors.primary,
          }}>
          Task Management™ {'\n'}
        </Text>
        <Text
          style={{
            fontSize: 12,
            //     //fontFamily: 'HelveticaRegular',
            paddingRight: 20,
            lineHeight: 17,
            opacity: 0.6,
            color: Colors.primary,
          }}>{`
About us......`}</Text>
      </View>
    );
  };
  return (
    <Container style={{flex: 1, backgroundColor: Colors.white}}>
      {isGuest ? (
        <View style={styles.mainContainer}>
          <FlatList
            data={about}
            showsVerticalScrollIndicator={false}
            renderItem={renderAboutus}
            contentContainerStyle={{paddingBottom: 150}}
            ListFooterComponent={() => {
              return (
                <View style={styles.bottomContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      // //fontFamily: 'HelveticaRegular',
                      fontWeight: 'bold',
                      color: Colors.primary,
                    }}>
                    Task
                  </Text>
                  <View style={{flex: 1}}>
                    <FlatList
                      numColumns={2}
                      keyExtractor={item => '_' + item.id}
                      data={location}
                      renderItem={renderLocationRow}
                    />
                  </View>
                </View>
              );
            }}></FlatList>
        </View>
      ) : (
        (console.log(scrollY, 'yy'),
        (
          <Animated.View
            style={{
              //  flex: 1,
              height: height,
              alignItems: 'center',
              backgroundColor: scrollY === 0 ? Colors.primary : Colors.white,
            }}>
            <Animated.FlatList
              initialNumToRender={1}
              keyExtractor={item => item.id.toString()}
              style={{flex: 1}}
              data={text}
              renderItem={renderItem}
              ListHeaderComponent={
                <Animated.View
                  style={[
                    {
                      maxHeight: 300,
                      width: width,
                      backgroundColor: Colors.primary,

                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: [
                        {
                          translateY: coverTranslateY,
                        },
                      ],
                    },
                  ]}>
                  <Animated.Image
                    resizeMode="center"
                    source={require('../../assets/Images/badge.png')}
                    style={[
                      {
                        width: 100,
                        height: 400,
                        transform: [
                          {
                            scale: coverScale,
                          },
                        ],
                      },
                    ]}
                  />
                  <Animated.Text
                    style={{
                      color: Colors.white,
                      fontSize: 30,
                      bottom: 130,

                      fontWeight: 'bold',
                      //  //fontFamily: 'HelveticaRegular',
                    }}>
                    1345
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: Colors.secondary,
                      fontSize: 30,
                      bottom: 130,
                      fontWeight: 'bold',
                      //   //fontFamily: 'HelveticaRegular',
                    }}>
                    GOLD
                  </Animated.Text>
                </Animated.View>
              }
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: scrollY,
                      },
                    },
                  },
                ],

                {
                  useNativeDriver: true,
                },
              )}></Animated.FlatList>
          </Animated.View>
        ))
      )}
    </Container>
  );
}
