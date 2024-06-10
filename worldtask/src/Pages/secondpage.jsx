import React, { useState } from 'react';
import FirstPage from '../Pages/firstpage';

const SecondPage = () => {
    const [page, setPage] = useState('second page');
  
    return (
        <div>
            {page === 'second page' ? (
                <>
                    <h1>{page}</h1>
                    <button onClick={() => setPage('first page')}>go to first page</button>
                </>
            ) : (
                <FirstPage/>
            )}
        </div>
    );
}

export default SecondPage;
