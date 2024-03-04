export default function Button({ mode = "filled", children, Icon, ...props }) {

    let cssClasses = `button ${mode}-button`;
    if (props.className) {
        cssClasses += ' ' + props.className;
    }
    if (Icon) {
        cssClasses += ' icon-button';

    }
    return (
        <button className={cssClasses} {...props}>
            {
                Icon && (
                    <span className="button-icon">
                        <Icon />
                    </span>

                )
            }
            <span>{children}</span>
        </button>)

}
