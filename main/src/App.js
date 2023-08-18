import React, { Suspense, useState } from 'react';
import ReactLoading from 'react-loading';
import Box from './components/Box.js';


// using React Lazy Loading for performance optimisation

const Nav = React.lazy(() => import('./components/navigation/nav.js'));
const Editor = React.lazy(() => import('./components/editor/Editor.js'));
const TableContainer = React.lazy(() => import("./components/table/TableContainer"));

export default function App () {

  const [query, setQuery] = useState("");
  const [val, setVal] = useState(`select * from Dropdown Menu`);

  return (
    <div className='bg-indigo-200'>
      <Suspense fallback={
        <div className='text-center flex justify-center items-center text-indigo-800'>
          <ReactLoading type={'bars'} color={'#00008B'} />
        </div>
      }>
        <Nav />
        <Editor
          setQuery={setQuery}
          value={val}
          setValue={setVal}
        />
        {query ? <TableContainer query={query}  /> : <Box/>}
      </Suspense>
    </div>
  )
};

