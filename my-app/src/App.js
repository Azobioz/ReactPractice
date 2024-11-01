import React from "react";
import Header from "./components/Header";
import Image from "./components/Image"
import reactImage from "./img/React.png"

class App extends React.Component {

    constructor(props) { // Состояние для того, чтобы динамически менять данные
        super(props);
        this.state = {
            helpText: "Help Text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)


    }

    componentDidUpdate(previousProp) {
        if(this.state.helpText !== "Help") {
            console.log("Some text")
        }
    }


    render() {
        return <div className="name">
            <Header title="Шапка"/>
            <Header title="Сайта"/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                   onChange={event=> this.setState({userData: event.target.value,
                    helpText: event.target.value} )}
                   onClick={this.inputClick} onMouseOver={this.mouseOver}/>
            <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
        <Image image={reactImage} />
    </div>
    }

    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("Clicked")
    }
    mouseOver() {console.log("MouseOver")}

}

export default App