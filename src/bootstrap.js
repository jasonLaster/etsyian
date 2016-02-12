import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

console.log([1,2,3].map(x => x*2))


export default class Person extends React.Component {
    render() {
      return (
        <h3>{this.props.name}</h3>
      );
    }
}
ReactDOM.render(<Person name="Joe"></Person>, $('.content').get(0));


export function bootstrap() {
  console.log('hello forom bootstrap')
}
