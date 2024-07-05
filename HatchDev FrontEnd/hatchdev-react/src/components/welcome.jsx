/* eslint-disable react/prop-types */
export const WelcomeGreeting = ({name, textColor, level}) => {
    return (
        <div style={{color: textColor}}>
            <p>
                You are welcome {name}, this is your first tutorial class in react.
                Your current level is {level}
            </p>
        </div>
    )
}