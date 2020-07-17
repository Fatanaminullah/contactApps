import React from 'react';
import {TextInput, View, Text, Image} from 'react-native';
import {Container, Header, Content, Item, Input, Icon} from 'native-base';
import searchIcon from '../../../../assets/img/search.png';

const SearchBox = (props) => {
  return (
    <Item rounded style={{ justifyContent: 'flex-start', paddingLeft: 20 }}>
      <Image source={searchIcon} style={{ width: 20 }} resizeMode="contain" />
      <Input style={{ fontSize: 12, color: '#ccc' }} placeholder="Search for Contact.." />
    </Item>
  );
};

export default SearchBox;
