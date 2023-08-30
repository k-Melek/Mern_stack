import React from "react";

class FirstClassComponent extends React.Component {
    render() {
        console.log(this);
        return (
            <fieldset>
                <legend>----First Class Component----</legend>
                <h1>Hello From First Class Component ✌✌✌</h1>
                <h2>Number from App.js = {this.props.number}</h2>

                <h2>John from App.js = {JSON.stringify(this.props.john)}</h2>
            </fieldset>
        )
    }
}

export default FirstClassComponent;