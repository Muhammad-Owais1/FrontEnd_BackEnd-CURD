import React, { useState } from 'react'

export default function Table() {

    const [users, setUsers] = useState([])

    const handleFetch = async () => {

        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-green-800 flex justify-center items-center'>
            <table>

            </table>
            <button onClick={handleFetch}>fetch</button>
        </div>
    )
}
