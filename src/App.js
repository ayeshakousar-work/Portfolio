// src/App.js
import './App.css';
import './index.css';
import PortfolioPage from './front';
import Footer from './footer'; // Make sure Footer.js exists

// App.js or main layout file
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* No Header */}
      <main className="flex-grow">
        <PortfolioPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
