
import './Button.scss'

export const Button = ({ text, backgroundColor, color, func, fontWeight }) => {

    return (
        <button className="functional-btn flex" onClick={func} style={{ backgroundColor, color, fontWeight  }}>
            {text}
        </button>
    )
}

