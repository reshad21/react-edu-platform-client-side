import { Flowbite } from 'flowbite-react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';


function App() {
  return (
    <div className="dark:bg-slate-600 dark:text-white">
      <Flowbite>
        <RouterProvider router={router}></RouterProvider>
      </Flowbite>
        {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
}

export default App;
