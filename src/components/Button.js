import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button 
            onClick={onClick} // event when you click the button
            style={{backgroundColor: color}} 
            className="btn">{text}</button>
        )
}

Button.defaultProps = {
    color: 'blue',
    text: 'Add'    
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button