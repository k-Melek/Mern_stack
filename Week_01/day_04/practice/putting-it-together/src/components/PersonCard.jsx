import React from 'react'

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person.age,
        };
        console.log("State:",this.state);
    }
        increaseAge = () => {
            this.setState({age:this.state.age + 1})
        }

    render() {
        return (
            <fieldset>
                <legend>PersonCard</legend>
                <div >
                    <h1>{this.props.person.firstname}, {this.props.person.lastname}</h1>
                    <p>Age : {this.state.age}</p>
                    <p>Hair Color : {this.props.person.hairColor}</p>
                    <button onClick={this.increaseAge}>Birthday Button For {this.props.person.firstname}, {this.props.person.lastname}</button>
                </div>
            </fieldset>
        )
    }
}

export default PersonCard
