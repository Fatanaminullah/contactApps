import React from 'react';
import {TouchableHighlight, View, Text, Image} from 'react-native';
import deleteIcon from '../../../../assets/img/delete.png';
import {widthPercentageToDP} from '../../../common/general-component/percentage-size';
import SwipeableList from '../../../common/general-component/swipeable-list';

const ListComponent = (props) => {
  return (
    <SwipeableList
      dataSource={{
        leftButton: [],
        rightButton: [
          {
            buttonId: 'delete-notification-button',
            buttonStyle: {
              backgroundColor: '#db4545',
              alignItems: 'center',
              justifyContent: 'center',
            },
            width: widthPercentageToDP('23%'),
            buttonImageSource: deleteIcon,
            buttonImageStyle: {
              width: 15,
              height: 20,
            },
            events: {
            //   onPress: (e) => this.props.onDeleteNotification(e),
            },
          },
        ],
      }}
      list={props.listContact}
      renderRow={props.renderListItem}
      onRowDidOpen={props.onRowDidOpen}
    />
  );
};

export default ListComponent;
