import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  getDetailContact,
  deleteContact,
} from '../../common/store/action/action';
import DetailComponent from '../../module/detail-contact/component/detail-component';

class DetailContactScreen extends Component {
  componentDidMount() {
    this.props.getDetailContact(this.props.route.params.id);
  }
  render() {
    return (
      <DetailComponent
        navigation={this.props.navigation}
        detail={this.props.detailContact}
        onDelete={this.props.deleteContact}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.contact,
});

const mapActionToProps = () => ({
  getDetailContact,
  deleteContact,
});

export default connect(
  mapStateToProps,
  mapActionToProps(),
)(DetailContactScreen);
