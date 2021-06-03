import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pager, setPager] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setLastname(contact.lastname);
      setAge(contact.age);
      setPager(contact.pager);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = {
      ...contact,
      name,
      lastname,
      age,
      pager,
    };
    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Pager"
              value={pager}
              onChange={(e) => setPager(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
