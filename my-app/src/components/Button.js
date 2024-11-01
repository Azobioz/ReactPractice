import React, {useEffect, useState} from 'react'

const Button = (props) => {
    const [click, setClick] = useState(0)

    useEffect(() => {
        document.title = `Click: ${click}`
    })

    return (
    <button onClick={() => setClick(click + 2)}> {props.text} {click}</button>
    )

}

Button.defaultProps = { //Значение по умолчанию для props.text
    text: "Кнопка"
}

export default Button