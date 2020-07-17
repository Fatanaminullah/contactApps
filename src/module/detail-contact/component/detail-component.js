/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Text} from 'native-base';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../common/general-component/percentage-size';
import defaultAvatar from '../../../../assets/img/default-avatar.png';
import bgProfile from '../../../../assets/img/account.png';
import deleteIcon from '../../../../assets/img/delete.png';
import edit from '../../../../assets/img/edit.png';

const DetailComponent = (props) => {
  const { detail } = props;
  return (
    <View>
      <View>
        <Image
          source={bgProfile}
          style={{width: '100%', height: heightPercentageToDP('30%')}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: heightPercentageToDP('30%'),
        }}>
        <Image
          source={{ uri: detail.photo }}
          style={{
            width: 185,
            height: 185,
            top: -150,
            borderRadius: 100,
          }}
          // resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          top: -150,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // borderRadius: 10,
            // borderWidth: 1,
            // borderColor: '#ccc',
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 26, color: '#0F3E3B', fontWeight: 'bold'}}>
              {`${detail.firstName} ${detail.lastName}`}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, color: '#0F3E3B', fontWeight: 'bold'}}>
              {detail.age} Years Old
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
            <Button
              iconLeft
              onPress={() => props.navigation.navigate('EditContact', { id: detail.id })}
              style={{
                width: widthPercentageToDP('35%'),
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                marginTop: 20,
                justifyContent: 'center',
                backgroundColor: '#707070',
                padding: 10
              }}>
              <Image
                source={edit}
                style={{width: 15}}
                resizeMode="contain"
              />
              <Text style={{ color: '#fff' }}>Edit</Text>
            </Button>
            <Button
              iconLeft
              onPress={() => props.onDelete(detail.id)}
              style={{
                width: widthPercentageToDP('35%'),
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                marginTop: 20,
                justifyContent: 'center',
                backgroundColor: '#db4545',
                padding: 10,
              }}>
              <Image
                source={deleteIcon}
                style={{width: 15}}
                resizeMode="contain"
              />
              <Text style={{ color: '#fff' }}>Delete</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailComponent;
