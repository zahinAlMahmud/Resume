import Navbar from './components/Navbar/Navbar.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="d-flex flex-column flex-md-row min-vh-100">
      {/* Sidebar/Navbar */}
      <div className="flex-shrink-0 bg-dark text-white" style={{ width: '100%', maxWidth: '250px' }}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
