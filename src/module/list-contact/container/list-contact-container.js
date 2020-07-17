import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import SearchBox from '../component/search-box';
import AddButton from '../component/add-button';
import ListComponent from '../component/list-component';

const ListContactContainer = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', padding: 10}}>
        <SearchBox />
      </View>
      <ScrollView>
        <ListComponent
          renderListItem={props.renderList}
          listContact={props.listContact}
          onRowDidOpen={props.onRowDidOpen}
          navigation={props.navigation}
        />
      </ScrollView>
      <AddButton onClick={props.onClickAddButton} />
    </View>
  );
};

export default ListContactContainer;
