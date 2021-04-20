import React, { useState } from "react"

function UseState() {

    const [answer] = useState('Yes')
    console.log(answer);

    return (
        <div>
            <h1>Is state important to know? {answer} </h1>
        </div>
    )
}

// class UseState extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default UseState