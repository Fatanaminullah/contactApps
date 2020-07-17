import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetailContact, editContact} from '../../common/store/action/action';
import FormComponent from '../../module/detail-contact/component/form-component';

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
      this.props.navigation.navigate('DetailContact', { id: this.props.route.params.id });
    }, (err) => alert('Failed!'));
  }
  componentDidMount() {
    this.props.getDetailContact(this.props.route.params.id).then((res) => {
      this.setState(res);
    });
  }
  render() {
    return (
      <FormComponent
        isEdit
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
});

export default connect(mapStateToProps, mapActionToProps())(EditContactScreen);
