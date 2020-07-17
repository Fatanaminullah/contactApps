import * as React from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import SearchBox from '../component/search-box';
import AddButton from '../component/add-button';
import ListComponent from '../component/list-component';

const ListContactContainer = (props) => {
  return (
    <View style={{flex: 1}}>
    <ActivityIndicator
      animating={props.loading}
     />
      <View style={{justifyContent: 'center', padding: 10}}>
        <SearchBox />
      </View>
      <ScrollView>
        <ListComponent
          renderListItem={props.renderList}
          listContact={props.listContact}
          onRowDidOpen={props.onRowDidOpen}
          navigation={props.navigation}
          onClickDelete={props.onClickDelete}
        />
      </ScrollView>
      <AddButton onClick={props.onClickAddButton} />
    </View>
  );
};

export default ListContactContainer;
