import React, { useEffect, useState } from 'react';


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

    return (
        <div className="Raju">
            <div className="container">
                <h1>List Page</h1>
                {formDataList.map((formData, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <p> {formData.firstName}</p>
                            <p> {formData.lastName}</p>
                            <p> {formData.email}</p>
                            <p> {formData.phoneNumber}</p>
                            <button onClick={() => handleDelete(index)}>Trash</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessPage;
