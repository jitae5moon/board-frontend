import { RouterProvider } from 'react-router-dom';
import root from './routers/root';

function App() {
  return (
    <RouterProvider router={root} />
  );
}

export default App;
