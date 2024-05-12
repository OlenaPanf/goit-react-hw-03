import css from './Contact.module.css'
import { HiPhone } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

export default function Contact({ data: { id, name, number }, onDelete }) {
    
    return (
        <div >
            <HiUser />
            <p>{name}</p>
            <HiPhone />
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>
                Delete</button>
        </div>
    );
}
