import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className="contact-item">
      <div className="contact-text">
        <span><RiContactsFill className="contact-icon" />{name}</span>
        <span><FaPhone className="contact-icon" />{number}</span>
      </div>
      <button onClick={() => onDelete(id)} className="button-delete">Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;