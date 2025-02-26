import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/UserApp/Home/Home';
import Layout from "pages/UserApp/Layout/Layout"
import Users from "pages/UserApp/Users/Users"


function App() {
  {/*"Layout" and its nested routes*/ }
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
    </BrowserRouter>
        );
}

export default App;
