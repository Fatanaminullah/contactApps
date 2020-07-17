import * as React from 'react';
import {Button, Text} from 'native-base';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {heightPercentageToDP} from '../../../common/general-component/percentage-size';
import addIcon from '../../../../assets/img/plus.png';

const DetailComponent = (props) => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: heightPercentageToDP('40%'),
        }}>
        <TouchableOpacity
            onPress={() => alert('aa')}
        >
            <Image
            source={props.avatar}
            style={{
                width: 200,
                borderRadius: 200,
            }}
            resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 20,
        }}>
        <TextInput
          style={{
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 10,
            paddingLeft: 15,
            padding: 10,
          }}
          placeholder="Name..."
        />
        <TextInput
          style={{
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 10,
            paddingLeft: 15,
            padding: 10,
          }}
          placeholder="Phone Number..."
        />
        <Button
          iconLeft
          bordered
          onPress={() => alert('aaa')}
          style={{borderRadius: 10, marginTop: 20, justifyContent: 'center'}}>
          <Image source={addIcon} style={{width: 25}} resizeMode="contain" />
          <Text>Add Contact</Text>
        </Button>
      </View>
    </View>
  );
};

export default DetailComponent;
