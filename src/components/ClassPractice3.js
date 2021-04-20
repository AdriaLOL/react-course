import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class ClassPractice3 extends React.Component {

    constructor(){
        super()

        this.state = {
            logged: false
        }
    }

    render(){

        const isLoggedIn = this.state.logged
        let logText

        if (isLoggedIn) {
            logText = 'in'
        } else {
            logText = 'out'
        }

        return (
            <div>
                <h1>You are currently logged {logText}</h1>
        </div>
        )
    }
}

export default ClassPractice3