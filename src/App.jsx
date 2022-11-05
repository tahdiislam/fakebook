import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  )
}

export default App
