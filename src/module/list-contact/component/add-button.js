import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import addButton from './../../../../assets/img/plus.png';

const AddButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onClick()}
      style={{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      }}>
      <Image
        source={addButton}
        style={{resizeMode: 'contain', width: 50, height: 50}}
      />
    </TouchableOpacity>
  );
};

export default AddButton;
