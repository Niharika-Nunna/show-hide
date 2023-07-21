// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
    state = {isFirstClicked: false, isLastClicked: false}

    onClickFirstNameBtn = () => {
        this.setState(prevState => ({isFirstClicked: !prevState.isFirstClicked}))
    }

    onClickLastNameBtn = () => {
        this.setState(prevState => ({isLastClicked: !prevState.isLastClicked}))
    }
    
    render() {
        const {isFirstClicked, isLastClicked} = this.state
        return (
            <div className = "bg-container">
                <h1 className = "heading">Show/Hide</h1>
                <div className = "showHideContainer">
                    <div>
                        <button className = "showHide-btn" type = "button" onClick = {this.onClickFirstNameBtn}>Show/Hide Firstname</button>
                        {isFirstClicked ? (<p className = "name-heading">Joe</p>) : (<p></p>)}
                    </div>
                    <div>
                        <button className = "showHide-btn" type = "button" onClick = {this.onClickLastNameBtn}>Show/Hide Lastname</button>
                        {isLastClicked ? (<p className = "name-heading">Jonas</p>) : (<p></p>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowHide