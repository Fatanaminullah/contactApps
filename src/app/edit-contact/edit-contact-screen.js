import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetailContact, editContact, getListContact} from '../../common/store/action/action';
import FormComponent from '../../module/detail-contact/component/form-component';
import ImagePicker from 'react-native-image-picker';

class EditContactScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  };
  onChangeValue = (e, field) => {
    this.setState({
      [`${field}`]: e,
    })
  }
  onSubmit = () => {
    const request = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: parseInt(this.state.age),
      photo: this.state.photo,
    }
    this.props.editContact(this.props.route.params.id, request).then((res) => {
      alert('Success!');
      this.props.getListContact();
      this.props.navigation.navigate('ListContact');
    }, (err) => alert('Failed!'));
  }
  componentDidMount() {
    this.props.getDetailContact(this.props.route.params.id).then((res) => {
      this.setState(res);
    });
  }
  pickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          photo: source.uri,
        });
      }
    });
  };
  render() {
    return (
      <FormComponent
        isEdit
        pickImage={this.pickImage}
        detail={this.props.detailContact}
        onChangeValue={this.onChangeValue}
        form={this.state}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.contact,
});

const mapActionToProps = () => ({
  getDetailContact,
  editContact,
  getListContact,
});

export default connect(mapStateToProps, mapActionToProps())(EditContactScreen);
