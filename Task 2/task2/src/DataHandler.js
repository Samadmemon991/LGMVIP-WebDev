import React, { Component } from 'react'

class DataHandler extends Component {

    render() {
        const usrData = this.props.usrData.map((user) => {
            return (
                <div className="card" key={user.id}>
                    <div className="card-image">
                        <img src={user.avatar} alt="user-img" />
                    </div>
                    <div className="details">
                        <h2>{user.first_name + " " + user.last_name}<br />
                            <span>{user.email}</span></h2>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="box" >
                    {usrData}
                </div>
            </div>
        );
    }
}

export default DataHandler