export default function Button({ label, ...props }) {
    return <button {...props}>{label}</button>;
}
