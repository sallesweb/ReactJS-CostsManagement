import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Footer } from './components'
import { Home, Company, NewProject, Projects, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
