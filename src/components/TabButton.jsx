// Version 1:
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

// Version 2:
// export default function TabButton({ label }) {
//     return <li><button>{label}</button></li>;
// }