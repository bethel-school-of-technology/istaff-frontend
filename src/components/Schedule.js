import React, { Component } from 'react';
import axios from "axios";

export default class Schedule extends Component {
    constructor(props) {
        super(props);

        console.log('Schedule List is Active');

        this.state = {
           // week_start: '',
            idschedules: [],
            //idemp: localStorage.getItem('idemp')
        };
    }

    componentDidMount(idemp) {
        let data = { ...this.state, idemp: localStorage.getItem('idemp')}
        console.log(data)
        axios.post('http://localhost:3001/users/schedules', data)
            .then(res => {
                const idschedules = res.data.idschedules.map(obj => ({ 
                    week_start: obj.week_start,
                    mon_start: obj.mon_start,
                    mon_end: obj.mon_end,
                    sun_start: obj.sun_start,
                    sun_end: obj.sun_end
                }));
                this.setState({idschedules});
                console.log(res.data.idschedules)
            });
    }

    render() {
        return (
            <div>
                <h1>Current Week Schedule</h1>
                <p>{this.state.week_start} </p>
                <ul>
                    {this.state.idschedules.map((idschedules, index) => {
                        return (
                            <div key={idschedules}>
                                <h3>Week Start: {idschedules.week_start}</h3>
                                <h3>Sunday Start: {idschedules.sun_start}</h3>
                                <h3>Sunday End: {idschedules.sun_end}</h3>
                              </div>   
                        )
                    })}
                </ul>
            </div>
        );
    }
}