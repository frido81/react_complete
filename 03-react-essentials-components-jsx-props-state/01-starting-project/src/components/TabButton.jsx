export default function TabButton({ children, onSelect }) {
    console.log("TAB BUTTON EXECUTING");
    return <li><button onClick={onSelect}>{children}</button></li>
}