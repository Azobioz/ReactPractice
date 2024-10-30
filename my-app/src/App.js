import React from "react";
import Header from "./components/Header";
import Image from "./components/Image"
import reactImage from "./img/React.png"

class App extends React.Component {

    helpText = "Help text"

    render() {
        return <div className="name">
            <Header title="Шапка" name="123"/>
            <Header title="Сайта"/>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
                   onClick={this.inputClick} onMouseOver={this.mouseOver}/>
            <p>{this.helpText === "Help text" ? "Yes" : "No"}</p>
        <Image image={reactImage} />
    </div>
    }

    inputClick() {console.log("Clicked")}
    mouseOver() {console.log("MouseOver")}

}

export default App