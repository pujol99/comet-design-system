export default function Icon({ icon, onClick, big, noFill }) {
    return (
        <span
            onClick={onClick}
            className={` icon noselect ${noFill ? "material-symbols-outlined" : "material-symbols-rounded"} ${
                big ? "material-symbols-rounded__big" : ""
            }`}>
            {icon}
        </span>
    );
}
