//import { useContext } from 'react';
import IconUserNav from '../components/IconUserNav';
//import { CurrentUser } from '../context/CurrentUser'; // import the CurrentUser


const Home = () => {
  //  const { currentUser } = useContext(CurrentUser); // get the currentUser from the context

    return (
        <main className='w-100 mt-3 px-2'>
            <h1 className='fw-bold p-2'> Stay On Track With FitTrack!</h1>
            <IconUserNav/>
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

