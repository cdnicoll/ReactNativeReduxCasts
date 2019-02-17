import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees.length !== this.props.employees.length) {
      this.props.employeesFetch();
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => <EmployeeListItem employee={item} />}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch },
)(EmployeeList);
