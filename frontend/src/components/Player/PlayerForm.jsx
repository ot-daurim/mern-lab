import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
    constructor(props){
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
    }
    submitPlayer(event) {
        event.preventDefault()

        axios.post('http://localhost:3030/players', {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="row">
                <div className="center">Add a new Player</div>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="firstName" ref={this.firstNameRef}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="lastName" ref={this.lastNameRef}/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="phone" ref={this.phoneRef}/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="email" ref={this.emailRef}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light " 
                        type="submit"
                    >
                        Add new player
                    </button>
                </form>
            </div>
        )
    }
}

export default PlayerForm;