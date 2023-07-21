import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const SuccessPage = () => {
    const [formDataList, setFormDataList] = useState([]);

    useEffect(() => {
        // Retrieve data from local storage when the component mounts
        const storedDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
        setFormDataList(storedDataList);
    }, []);

    const handleDelete = (index) => {
        // Delete the corresponding data from local storage and update the state
        const updatedDataList = formDataList.filter((_, i) => i !== index);
        localStorage.setItem('formDataList', JSON.stringify(updatedDataList));
        setFormDataList(updatedDataList);
    };

    const navigate = useNavigate();

    const handleEdit = (editData, dataIndex) => {
        // Navigate to the ContactForm page with editData and dataIndex as state
        navigate('/contactForm', { state: { editData, dataIndex } });
    };

    return (
        <div className="Raju">
            <div className="container">
                <h1>List Page</h1>
                {formDataList.map((formData, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <p>First Name: {formData.firstName}</p>
                            <p>Last Name: {formData.lastName}</p>
                            <p>Email: {formData.email}</p>
                            <p>Phone Number: {formData.phoneNumber}</p>

                            <button onClick={() => handleEdit(formData, index)} className="btn btn-warning">
                                <AiFillEdit /> Edit
                            </button>

                            <div className='delete'>
                                <button onClick={() => handleDelete(index)} className="btn btn-danger">
                                    <AiFillDelete /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/contactForm" className="btn btn-primary">Add New Contact</Link>
            </div>
        </div>
    );
};

export default SuccessPage;
