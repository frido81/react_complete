export default function Button({ mode = "filled", children, Icon, ...props }) {


    if (Icon) {
        return (
            <button className={`button icon-button`} {...props}>
                <span className="icon-button">
                    <span className="button-icon">
                        <Icon></Icon>
                    </span>
                </span>
                {children}
            </button>
        )
    } else {
        return (
            <button className={`button ${mode}-button`} {...props}>
                {children}
            </button>
        )
    }

    // Todo: Build this component!

    // !!! Important:
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
}
