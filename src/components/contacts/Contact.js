import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll, setSelectAll }) => {
  const dispatch = useDispatch();
  const { name, lastname, age, pager, id } = contact;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            onChange={() => setSelectAll(!selectAll)}
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{pager}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
