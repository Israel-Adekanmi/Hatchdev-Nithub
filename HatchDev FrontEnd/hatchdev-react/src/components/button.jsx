/* eslint-disable react/prop-types */

export const MyButton = ({textContent, bgColor, textColor}) => {
return (
    <div style={{background: bgColor, color: textColor}}>
        <button>{textContent}</button>
    </div>
)
}