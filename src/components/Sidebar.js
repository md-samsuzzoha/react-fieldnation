import React from 'react';
import Profileimage from '../img/john-doe.jpg';
import { Modalview } from './Modalview';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'John Doe' };
        this.changeName = this.changeName.bind(this);
    }
    changeName(newName) {
        this.setState({
            name: newName
        })
    }
    render() {
        return (
            <div className="profile-box">
                <div className="profile">
                    <img src={Profileimage} alt="John Doe" />
                    <div className="media_box">
                        <div className="name-box">
                            <h1>{this.state.name}</h1>
                            <h3>547</h3>
                        </div>
                        <Modalview name={this.state.name} changeName={this.changeName} />
                    </div>
                </div>
            </div>
        )
    }
}

