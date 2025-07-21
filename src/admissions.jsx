import './styles.css'
import { useState } from 'react';

function Admissions() {
    const [admissions, setAdmissions] = useState(0);

    function increment(){
        setAdmissions(admissions + 1);
    }

    const decrement = () => {
        setAdmissions(admissions - 1);
    }

    return (
        <main>
            <h1>Admissions Page</h1>

            <h2>No of Admissions: {admissions}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </main>
    )
}

export default Admissions