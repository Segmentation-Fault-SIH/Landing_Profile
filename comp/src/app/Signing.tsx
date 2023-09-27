import React from 'react';
import './signing.css'; // Import your CSS file for styling
import Link from 'next/link';
function App() {
  const handleSubmit = () => {
    // Handle the form submission here
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <div>
        {/* Add the Google icon here */}
        <i className="fa fa-google" aria-hidden="true"></i>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          {/* Add the Google icon here */}
          <Link href='/HomePage'className="text-black text-xl hover:bg-gray-200 px-2 py-1 rounded">
          <button type="submit">
            <i className="fa fa-google  " aria-hidden="true"></i>    Sign Up with Google
          </button >
          </Link>
        </form>
      </div>
    </div>
  );
}

export default App;