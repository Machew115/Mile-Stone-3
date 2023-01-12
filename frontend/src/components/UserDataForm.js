import React, { useState } from 'react';

function UserDataForm(props) {

    console.log(props.date)
    // declare variables 
    const date = new Date(props.date);
    [dataWeight, setDataWeight] = useState(0);
    [dataWaist, setDataWaist] = useState(0);
    [dataChest, setDataChest] = useState(0);
    [dataShoulders, setDataShoulders] = useState(0);
    [dataBiceps, setDataBiceps] = useState(0);
    [dataThighs, setDataThighs] = useState(0);
    [dataCalves, setDataCalves] = useState(0);

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // create new userData object
        const newUserData = {
        data_user_id: props.user.user_id,
        data_start_date: date,
        data_current_date: date,
        data_start_weight: dataWeight,
        data_current_weight: dataWeight,
        data_start_waist: dataWaist,
        data_current_waist: dataWaist,
        data_start_chest: dataChest,
        data_current_chest: dataChest,
        data_start_shoulders: dataShoulders,
        data_current_shoulders: dataShoulders,
        data_start_biceps: dataBiceps,
        data_current_biceps: dataBiceps,
        data_start_thighs: dataThighs,
        data_current_thighs: dataThighs,
        data_start_calves: dataCalves,
        data_current_calves: dataCalves,
        };

        //send the new userdata object to the server
        fetch(`http://localhost:5500/userData`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
    });

    // reload the page after
    window.location.reload()

    }

    return (
        <div className="modal-body w-100">
                        <form className="add-form w-50" onSubmit={handleSubmit}>
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="text"
                                    id="dataWeight"
                                    className="w-100 input_"
                                    onChange={(event) => setDataWeight(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="muscle Group">CurrentWeight (lb):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataWaist"
                                    className="w-100 input_"
                                    onChange={(event) => setDataWaist(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="exercise">Current Waist (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataChest"
                                    className="w-100 input_"
                                    onChange={(event) => setDataChest(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="sets">Chest size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataShoulders"
                                    className="w-100 input_"
                                    onChange={(event) => setDataShoulders(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="reps">Shoulder size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataBiceps"
                                    className="w-100 input_"
                                    onChange={(event) => setDataBiceps(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="weight">Bicep size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataThighs"
                                    className="w-100 input_"
                                    onChange={(event) => setDataThighs(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="duration">Thigh size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="dataCalves"
                                    className="w-100 input_"
                                    onChange={(event) => setDataCalves(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="duration">Calve size (cm):</label>
                            </div>
                            <br />
                            <button type="submit" className='btn btn-secondary'>Add Workout</button>
                        </form>
                    </div>
    )

}
export default UserDataForm