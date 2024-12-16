import React, { Component } from "react";

export default class Songs extends Component {
constructor(props) {
super(props);
}
 render() {
return (
     <div>
Songs:{this.props.blok.title}</div>
);
}