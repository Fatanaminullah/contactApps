import * as React from 'react';
import {TouchableHighlight, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {widthPercentageToDP} from '../../common/general-component/percentage-size';
import {getListContact, deleteContact} from '../../common/store/action/action';
import defaultAvatar from '../../../assets/img/default-avatar.png';
import ListContactContainer from '../../module/list-contact/container/list-contact-container';
import {request, PERMISSIONS} from 'react-native-permissions';

class ListContactScreen extends React.Component {
  state = {
    openedRow: '',
    rowMap: {},
  };
  requestAll = async () => {
    let cameraStatus, storageStatus, locStatus;
    cameraStatus = await request(PERMISSIONS.ANDROID.CAMERA);
    storageStatus = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    locStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return {cameraStatus, storageStatus, locStatus};
  };
  componentDidMount() {
    this.props.getListContact();
    this.requestAll().then(
      (res) => console.log('res', res),
      (err) => console.log('err', err),
    );
  }
  onRowDidOpen = (rowKey, rowMap) => {
    console.log('rowke', rowKey, rowMap)
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
    this.props.navigation.navigate('AddContact', {screen: 'AddContact'});
  };
  onClickDelete = (id) => {
    this.props.deleteContact(id).then((res) => {
      this.props.getListContact();
    });
  }
  renderList = (items, rowMap) => {
    const {item} = items;
    this.setRowMap(rowMap);
    return (
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate('DetailContact', {
            id: item.id,
          })
        }
        underlayColor="#eaeaea"
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
              source={item.photo !== 'N/A' ? {uri: item.photo} : defaultAvatar}
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{width: widthPercentageToDP('70%')}}>
            <Text>{`${item.firstName} ${item.lastName}`}</Text>
            <Text style={{marginTop: 5}}>{item.age} years old</Text>
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
        navigation={this.props.navigation}
        onClickAddButton={this.onClickAddButton}
        onClickDelete={this.onClickDelete}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.contact,
});

const mapActionToProps = () => ({
  getListContact,
  deleteContact,
});

export default connect(mapStateToProps, mapActionToProps())(ListContactScreen);
