import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { userid } = useParams();
    return (
        <div className='text-4xl bg-gray-600 text-zinc-50 flex items-center justify-center'>User: {userid}</div>
    );
}

export default User;
