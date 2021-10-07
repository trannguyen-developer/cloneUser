import React, { Fragment } from "react";
import "./styles.css";
import Header from "../../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", idDelete: id });
  };

  return (
    <Fragment>
      <Header />
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((child, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{child.id}</td>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.address}</td>
                <td>
                  <button
                    onClick={() => handleDelete(child.id)}
                    className="btn btnDelelte"
                  >
                    Delete
                  </button>
                  <Link to={`/update-user/${index}`} className="btn btnEdit">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
