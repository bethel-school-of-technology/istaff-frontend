import React, { Component } from 'react';
import axios from "axios";
import UpdateAccount from "./UpdateAccount";
import CreateSchedule from "./CreateSchedule";
import $ from 'jquery';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        console.log('Employee List is active');

        this.state = {
            users: []
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck = (idemp) => {
        var data = [...this.state.users];
        var index = data.findIndex(obj => obj.idemp === idemp);
        if (data[index].active === '0') {
            data[index].active = '1';
        }
        else data[index].active = '0';
        this.setState({ data });
    }

    componentDidMount() {
        let data = { ...this.state, idcomp: localStorage.getItem('idcomp') }
        axios.post('http://localhost:3001/users', data)
            .then(res => {
                //console.log(res.data)
                const users = res.data.map(obj => ({
                    idemp: obj.idemp,
                    firstName: obj.firstName,
                    lastName: obj.lastName,
                    middleName: obj.middleName,
                    dob: obj.dob,
                    hireDate: obj.hireDate,
                    userId: obj.userId,
                    email: obj.email,
                    password: obj.password,
                    manager: obj.manager,
                    active: obj.active,
                    week_start: obj.week_start,
                    mon_start: obj.mon_start,
                    mon_end: obj.mon_end,
                    tue_start: obj.tue_start,
                    tue_end: obj.tue_end,
                    wen_start: obj.wen_start,
                    wen_end: obj.wen_end,
                    thu_start: obj.thu_start,
                    thu_end: obj.thu_end,
                    fri_start: obj.fri_start,
                    fri_end: obj.fri_end,
                    sat_start: obj.sat_start,
                    sat_end: obj.sat_end,
                    sun_start: obj.sun_start,
                    sun_end: obj.sun_end,
                }));
                this.setState({ users });
                // console.log(userdata);
                // const activedata = res.data.map(obj => ({active:'0'}));
                // this.setState({active:activedata})
                // console.log(activedata)
            });
    }

    handleDelete = (idemp) => {
        axios.delete(`http://localhost:3001/users/` + idemp)
            .then(res => {
                console.log(res)
                console.log('it works')
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    submitHandler = (idemp) => {
        // e.preventDefault();
        //console.log(this.state);
        console.log('WHERE IS SHE!!!!')
        console.log(this.state.users);
        axios.post('http://localhost:3001/users/' + idemp, this.state.users)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        $(document).ready(function () {
            $('a.dropdown-toggle').on("click", function (e) {
                $(this).closest('li').toggleClass('open');
                e.stopPropagation();
                e.preventDefault();
            });
        });
        return (
            <div>
                {/* <h1>Employee List</h1> */}
                <ul >
                    {this.state.users.map((user, index) => {
                        return (
                            <form>
                                <div key={index}>
                                    <h3>{user.firstName} {user.lastName}</h3>

                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Update Account
                                        </button>
                                        <div class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <UpdateAccount idemp={user.idemp} firstName={user.firstName} lastName={user.lastName} middleName={user.middleName}
                                                dob={user.dob} hireDate={user.hireDate} userId={user.userId} email={user.email} manager={user.manager} password={user.password}
                                            />
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Create Schedule
                                        </button>
                                        <div class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <CreateSchedule idemp={user.idemp}/>
                                        </div>
                                    </div>

                                    {/* <button>Edit</button><button onClick={() => this.handleDelete(user.idemp)}>Delete</button> */}



                                    <div>
                                        <input type='checkbox' name='Disable User' onChange={event => this.handleCheck(user.idemp)} /><br />
                                        <button onClick={() => this.submitHandler(user.idemp)} >Disable User</button>
                                    </div>
                                </div>
                            </form>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
