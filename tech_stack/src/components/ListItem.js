import React from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends React.Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
    }

  renderDescription = () => {
    if (this.props.expanded) {
      return (
        <CardSection style={{ flex: 1 }}>
          <Text>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownPorps) => {
  const expanded = state.selectedLibraryId === ownPorps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions,
)(ListItem);
