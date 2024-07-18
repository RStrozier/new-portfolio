import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';


const AppRouter = () => {
  return (
    <Router>
        <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;