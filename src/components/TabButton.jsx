// Version 1:
export default function TabButton({ children, isSelected, ...props }) {
    console.log("TabButton COMPONENT EXECUTING")
    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}

// Version 2:
// export default function TabButton({ label }) {
//     return <li><button>{label}</button></li>;
// }