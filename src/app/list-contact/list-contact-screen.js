import * as React from 'react';
import {TouchableHighlight, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {widthPercentageToDP} from '../../common/general-component/percentage-size';
import {getListContact} from '../../common/store/action/action';
import defaultAvatar from '../../../assets/img/default-avatar.png';
import ListContactContainer from '../../module/list-contact/container/list-contact-container';

class ListContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedRow: '',
      rowMap: {},
    };
  }
  componentDidMount() {
    // this.props.getListContact();
  }
  onRowDidOpen = (rowKey) => {
    this.setState({openedRow: rowKey});
  };
  setRowMap = (item) => {
    this.setState({rowMap: item});
  };
  closeRow = () => {
    if (this.state.rowMap[this.state.openedRow]) {
      this.state.rowMap[this.state.openedRow].closeRow();
      this.setState({openedRow: ''});
    }
  };
  onClickAddButton = () => {
    this.props.navigation.navigate('AddContact', { screen: 'AddContact' });
  }
  renderList = (items, rowMap) => {
    const {item} = items;
    this.setRowMap(rowMap);
    return (
      <TouchableHighlight
        accessibilityLabel={`list-contact-${item.id}`}
        style={{
          backgroundColor: '#f5f5f5',
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#e6e6e6',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={item.avatar || defaultAvatar}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          <View style={{width: widthPercentageToDP('70%')}}>
            <Text>{item.nama}</Text>
            <Text>{item.phoneNumber}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <ListContactContainer
        renderList={this.renderList}
        listContact={this.props.listContact}
        onRowDidOpen={this.onRowDidOpen}
        setRowMap={this.setRowMap}
        onClickAddButton={this.onClickAddButton}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.contact,
});

const mapActionToProps = () => ({
  getListContact,
});

export default connect(mapStateToProps, mapActionToProps())(ListContactScreen);
