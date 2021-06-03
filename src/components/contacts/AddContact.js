import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pager, setPager] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name,
      lastname,
      age,
      pager,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
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
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
