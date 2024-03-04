export default function TabButton({ children, isSelected, ...props }) {
    console.log("TAB BUTTON EXECUTING");
    return (
        <li>
            <button className={isSelected ? "active" : ''} {...props}>
                {children}
            </button>
        </li>
    )
}