import { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser


const Home = () => {
    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context

    return (
        <main className='w-100 mt-3 px-2'>
            <h1 className='fw-bold p-2'> Stay On Track With FitTrack!</h1>
            <div className='w-100 links mt-3'>
                <a className='w-25 link' href={ !currentUser ? '/login' : '/workouts'}>
                    <img className='w-50' alt='dumbbell' src='./fitness-icon.png'/>
                </a>
                <a className='w-25 link' href={ !currentUser ? '/login' : '/meals'}>
                    <img className='w-50' alt='healthy-food' src='./healthy-food-icon.png'/>
                </a>
                <a className='w-25 link' href={ !currentUser ? '/login' : '/' /* to be changed later */}>
                    <img className='w-50' alt='calculator-icon' src='./calculate-math-icon.png'/>
                </a>
                <a className='w-25 link' href={ !currentUser ? '/login' : '/profile'}>
                    <img className='w-50' alt='personal-growth-icon' src='./personal-growth-icon.png'/>
                </a>
                <h2 className='fw-bold mt-3 w-25'>Workout Log</h2>
                <h2 className='fw-bold mt-3 w-25'>Meal Log</h2>
                <h2 className='fw-bold mt-3 w-25'>Calculators</h2>
                <h2 className='fw-bold mt-3 w-25'>Progress</h2>
            </div>
            <div className='add-form w-50 mt-4'>
                <div className='input-hold w-75 mt-3'>
                    <input 
                        className='w-100 input_' 
                        type='text'
                        placeholder=' '
                        name = 'search'
                        id='search'
                    />
                    <label className='fw-bold _label' htmlFor='search'> Search </label> 
                    <img className='search' alt='search-icon' src='./search-icon.png'/> {/* To add functionality to create a search request to the api when button clicked... */}
                </div>
            </div>
        </main>
    )
};

export default Home;

