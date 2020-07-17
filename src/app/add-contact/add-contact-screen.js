import React, {Component} from 'react';
import DetailComponent from '../../module/detail-contact/component/detail-component';
import defaultAvatar from '../../../assets/img/default-avatar.png';

class AddContactScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            avatar: defaultAvatar,
        }
    }
  render() {
    return <DetailComponent avatar={this.state.avatar} />;
  }
}

export default AddContactScreen;
