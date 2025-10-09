import  Navbar from './components/Navbar/Navbar.jsx';
import  MainContent from './components/MainContent/MainContent.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App (){
  return (
  <div className="d-flex">
      <Navbar />
      <div className="flex-grow-1">
        <MainContent />
      </div>
    </div>

  )

}

export default App;