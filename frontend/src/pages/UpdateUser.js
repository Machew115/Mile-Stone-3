import React, { useState, useContext, useEffect } from 'react';
import { CurrentUser } from '../context/CurrentUser';

function UpdateUser() {
    const [Weight, setWeight] = useState(0);
    const [Waist, setWaist] = useState(0);
    const [Chest, setChest] = useState(0);
    const [Shoulders, setShoulders] = useState(0);
    const [Biceps, setBiceps] = useState(0);
    const [Thighs, setThighs] = useState(0);
    const [Calves, setCalves] = useState(0);
    const {currentUser} =useContext(CurrentUser)
    console.log(currentUser?.userdata.data_id)
    


    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    //create object with updated data to send in request
    const newUserData = {
            data_current_weight: Weight,
            data_current_waist: Waist,
            data_current_chest: Chest,
            data_current_shoulders: Shoulders,
           data_current_biceps: Biceps,
            data_current_thighs: Thighs,
            data_current_calves: Calves,
    }

    //send the new workout object to the server with a Post request 
    fetch(`http://localhost:5500/userdata/${currentUser.userdata.data_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
    });

    // reload page after
    window.location.reload();

    };

    return(
        <div className='w-100 edit-box mt-2'>
        <p id='new-edit' className='fw-bold'> New Edit </p>
        <ul className='list-group list-group-horizontal justify-content-center w-75' id='input'>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="weight"
                value={Weight}
                onChange={(event) => setWeight(event.target.value)}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Waist"
                value={Waist}
                onChange={(event) => setWaist((event.target.value))}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Chest"
                value={Chest}
                onChange={(event) => setChest((event.target.value))}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Shoulders"
                value={Shoulders}
                onChange={(event) => setShoulders((event.target.value))}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Biceps"
                value={Biceps}
                onChange={(event) => setBiceps(event.target.value)}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Thighs"
                value={Thighs}
                onChange={(event) => setThighs(event.target.value)}
            />
        </li>
        <li className='list-group-item w-100 text-nowrap'>
            <input
                className='w-100'
                type="number"
                id="Calves"
                value={Calves}
                onChange={(event) => setCalves(event.target.value)}
            />
        </li>
    </ul>
    <button onClick={handleSubmit} className='btn btn-secondary fw-bold' id='save-btn'>Save</button>
</div>
    )
}
export default UpdateUser

