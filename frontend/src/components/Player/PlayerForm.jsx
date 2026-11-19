import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="center">Add a new Player</div>
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="firstName" ref="" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="lastName" ref="" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="phone" ref="" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="email" ref="" />
                            <label htmlFor="email">First Name</label>
                        </div>
                    </div>
                    <button className="
                        btn 
                        waves-effect 
                        waves-light" 
                        type="submit
                    ">
                        Add new player
                    </button>
                </form>
            </div>
        )
    }
}

export default PlayerForm;