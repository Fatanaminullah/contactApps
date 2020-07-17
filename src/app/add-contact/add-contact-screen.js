import React, {Component} from 'react';
import defaultAvatar from '../../../assets/img/default-avatar.png';
import ImagePicker from 'react-native-image-picker';
import FormComponent from '../../module/detail-contact/component/form-component';

class AddContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: defaultAvatar,
    };
  }

  pickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: '/',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatar: source,
        });
      }
    });
  };
  render() {
    return (
      <FormComponent avatar={this.state.avatar} pickImage={this.pickImage} />
    );
  }
}

export default AddContactScreen;
