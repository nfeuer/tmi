import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class SelectFlight extends Component {
  constructor(props) {
    super(props);
  }
    render() {
       return(
        <div>
            <table>
                <tr id="info">
                    <td>From</td>
                    <td>To</td>
                    <td>Date</td>
                </tr>
                <tr id="airport">
                    <td>AIR</td>
                    <td>POR</td>
                    <td>T</td>
                </tr>

            </table>
            <button id="edititinerary">Edit Itinerary</button>

            <table>
                <tr id="header">
                    <td>Depart</td>
                    <td>Arrive</td>
                    <td>Airline</td>
                    <td>Price</td>
                    <td>Select</td>
                </tr>   
                <tr id="flightinfo1">
                    <td>Depart</td>
                    <td>Arrive</td>
                    <td>Airline</td>
                    <td>Price</td>
                    <td><button id="pickflight1"></button></td>
                </tr>

            </table>
        </div>
       )
   }
        
  }