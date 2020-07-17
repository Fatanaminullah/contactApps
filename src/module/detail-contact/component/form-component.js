import * as React from 'react';
import {Button, Text} from 'native-base';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {heightPercentageToDP} from '../../../common/general-component/percentage-size';
import addIcon from '../../../../assets/img/plus.png';
import {formValueSelector} from 'redux-form';

const FormComponent = (props) => {
  const {detail, form} = props;
  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          height: heightPercentageToDP('40%'),
        }}>
        <TouchableOpacity onPress={() => props.pickImage()}>
          <Image
            source={{uri: form.photo}}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
            // resizeMode="contain"
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
          editable
          onChangeText={(e) => props.onChangeValue(e, 'firstName')}
          value={form.firstName}
          placeholder="First Name..."
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
          onChangeText={(e) => props.onChangeValue(e, 'lastName')}
          value={form.lastName}
          placeholder="Last Name..."
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
          onChangeText={(e) => props.onChangeValue(e, 'age')}
          value={form.age && form.age.toString()}
          placeholder="Age..."
        />
        <Button
          iconLeft
          bordered
          onPress={() => props.onSubmit()}
          style={{borderRadius: 10, marginTop: 20, justifyContent: 'center'}}>
          {props.isAdd ? (
            <Image source={addIcon} style={{width: 25}} resizeMode="contain" />
          ) : null}
          <Text style={{color: '#005a8c', fontWeight: 'bold'}}>
            {props.isEdit ? 'Submit' : 'Add Contact'}
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default FormComponent;
