import React, {Component} from 'react';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  PixelRatio,
  Platform,
  Text,
} from 'react-native';

class SwipeableList extends Component {
  renderLeftButton = (index) => {
    const {leftButton} = this.props.dataSource;
    if (leftButton.length > 0) {
      const result = leftButton.map((item, i) => (
        <View style={[item.buttonStyle, {width: item.width}]}>
          <TouchableOpacity
            accessibilityLabel={
              item.buttonId || `right-button-${i}-message-${index}`
            }
            onPress={() => {
              item.events.onPress(index);
            }}>
            <Image
              source={item.buttonImageSource}
              style={[item.buttonImageStyle]}
            />
          </TouchableOpacity>
        </View>
      ));
      return <View style={{flexDirection: 'row', height: 100}}>{result}</View>;
    } else {
      return <View />;
    }
  };
  renderRightButton = (index) => {
    const {rightButton} = this.props.dataSource;
    if (rightButton.length > 0) {
      const result = rightButton.map((item, i) => (
        <TouchableOpacity
          style={[item.buttonStyle, {width: item.width}]}
          accessibilityLabel={
            `${item.buttonId}-${index}` || `right-button-${i}-message-${index}`
          }
          onPress={() => {
            item.events.onPress(index);
          }}>
          <Image
            source={item.buttonImageSource}
            style={[item.buttonImageStyle]}
          />
        </TouchableOpacity>
      ));
      return <View style={{flexDirection: 'row', height: 100}}>{result}</View>;
    } else {
      return <View />;
    }
  };
  renderHiddenItem = (items, rowMap) => {
    const {item} = items;
    const id = item.key;
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {this.renderLeftButton(id)}
        {this.renderRightButton(id)}
      </View>
    );
  };
  heightPercentageToDP = (heightPercent) => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };
  renderEmptyDefault = () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: this.heightPercentageToDP('80%'),
      }}>
      <Text>No Data</Text>
    </View>
  );
  render() {
    const {list, renderRow, dataSource, renderEmpty} = this.props;
    const leftOpenWidth =
      dataSource.leftButton.reduce((a, b) => a + (b['width'] || 0), 0) || 0;
    const rightOpenWidth =
      dataSource.rightButton.reduce((a, b) => a + (b['width'] || 0), 0) * -1 ||
      0;
    return list.length ? (
      <SwipeListView
        data={list}
        closeOnRowBeginSwipe
        renderItem={renderRow}
        renderHiddenItem={this.renderHiddenItem}
        leftOpenValue={leftOpenWidth}
        rightOpenValue={rightOpenWidth}
        disableLeftSwipe={dataSource.rightButton.length === 0}
        disableRightSwipe={dataSource.leftButton.length === 0}
        onRowDidOpen={this.props.onRowDidOpen}
      />
    ) : renderEmpty ? (
      renderEmpty()
    ) : (
      this.renderEmptyDefault()
    );
  }
}

export default SwipeableList;
