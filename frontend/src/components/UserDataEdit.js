import React, { useState } from 'react';

function UserDataEdit({ UserData }) {
    console.log(UserData)
    // Declare state variables to store the form data
    [Date, setDate] = useState(UserData.data_current_date);
    [Weight, setWeight] = useState(UserData.data_current_weight);
    [Waist, setWaist] = useState(UserData.data_current_waist);
    [Chest, setChest] = useState(UserData.data_current_chest);
    [Shoulders, setShoulders] = useState(UserData.data_current_shoulders);
    [Biceps, setBiceps] = useState(UserData.data_current_Biceps);
    [Thighs, setThighs] = useState(UserData.data_current_thighs);
    [Calves, setCalves] = useState(UserData.data_current_calves);

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // create new userData object
        const EditedUserData = {
            data_current_date: Date,
            data_current_weight: Weight,
            data_current_waist: Waist,
            data_current_chest: Chest,
            data_current_shoulders: Shoulders,
            data_current_biceps: Biceps,
            data_current_thighs: Thighs,
            data_current_calves: Calves,
            };

     fetch(`http://localhost:5500/userdata/${UserData.data_user_id}`, {
             method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(EditedUserData),
        });

        // reload page after
        window.location.reload()
    };

        return(
            <div className='w-100 edit-box mt-2'>
            <p id='new-edit' className='fw-bold'> New Edit </p>
            <ul className='list-group list-group-horizontal justify-content-center w-75' id='input'>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="number"
                    id="current date"
                    value={Date}
                    onChange={(event) => setDate(event.target.value)}
                />
            </li>
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
                    onChange={(event) => setWaist(parseInt(event.target.value))}
                />
            </li>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="number"
                    id="Chest"
                    value={Chest}
                    onChange={(event) => setChest(parseInt(event.target.value))}
                />
            </li>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="number"
                    id="Shoulders"
                    value={Shoulders}
                    onChange={(event) => setShoulders(parseInt(event.target.value))}
                />
            </li>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="text"
                    id="Biceps"
                    value={Biceps}
                    onChange={(event) => setBiceps(event.target.value)}
                />
            </li>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="text"
                    id="Thighs"
                    value={Thighs}
                    onChange={(event) => setThighs(event.target.value)}
                />
            </li>
            <li className='list-group-item w-100 text-nowrap'>
                <input
                    className='w-100'
                    type="text"
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

export default UserDataEdit