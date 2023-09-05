import React from 'react'

class PersonCard extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>PersonCard</legend>
                <div >
                    <h1>{this.props.person.firstname}, {this.props.person.lastname}</h1>
                    <p>Age : {this.props.person.age}</p>
                    <p>Hair Color : {this.props.person.hairColor}</p>
                </div>
            </fieldset>
        )
    }
}

export default PersonCard
