import React from 'react';
import { Component } from 'react';
import UserList from './user_list';
import UserDetail from './user_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <UserDetail/>
      </div>
    );
  }
}
