import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends React.Component {
  render() {
    const { name } = this.props.employee;
    console.log(name);
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default EmployeeListItem;
