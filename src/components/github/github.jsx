import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/j2patel4545')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='text-center m-4 bg-gray-500 text-zinc-50 text-3xl'>
      {data ? (
        <>
          <img src={data.avatar_url} alt="" className=' h-[35vh]' />
          <div>github: {data.followers}</div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Github;
