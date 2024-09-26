import CustomSnackbar from '@/components/Snackbar/CustomSnackbar';
import HomePage from '@/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <CustomSnackbar />
  </Router>
);

export default AppRoutes;
