import React, {Fragment} from 'react';
import './styles.css'
import Header from '../../component/Header';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Home = props => {

    const data = useSelector(state => state)
    const dispatch = useDispatch()
    
    const handleDelete = (index) => {
        dispatch({type: 'DELETE_USER', indexDelete: index});
    }
    
    return (
        <Fragment>
            <Header />
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((child, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{child.name}</td>
                                <td>{child.age}</td>
                                <td>{child.address}</td>
                                <td>
                                    <button onClick={()=>handleDelete(index)} className="btn btnDelelte">Delete</button>
                                    <Link to={`/update-user/${index}`} className="btn btnEdit">Edit</Link>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Home