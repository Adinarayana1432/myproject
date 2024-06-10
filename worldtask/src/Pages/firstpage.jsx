import { useState } from 'react';
import Second from '../Pages/secondpage';

const FirstPage = () => {
    const [page, setPage] = useState('first page');
  
    return (
        <div>
            {page === 'first page' ? (
                <>
                    <h1>{page}</h1>
                    <button onClick={() => setPage('secondpage')}>go to second page</button>
                </>
            ) : (
                <Second/>
            )}
        </div>
    );
}

export default FirstPage;
