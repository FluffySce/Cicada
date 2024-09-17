import React, { useState } from 'react';
import CitationsGraph from "./components/Graphs/CitationsGraph";
import PublicationsGraph from "./components/Graphs/PublicationsGraph";
import HamburgerMenu from "./components/HamburgerMenu"; // Import the HamburgerMenu component
import MessageComponent from "./components/MessageComponent"; // Ensure the correct path
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from 'react-icons/fa'; // Import FaBars

const data = {
  citationsData: {
    years: ['2022', '2023', '2024'],
    citations: [3, 2, 6]
  },
  publicationsData: {
    years: ['2022', '2023', '2024'],
    publications: [5, 8, 7]
  },
  scopusData: {
    years: ['2022', '2023', '2024'],
    citations: [6, 2, 9]
  },
  googleScholarPapers: [
    { title: 'Paper 1', doi: '10.1000/xyz123' },
    { title: 'Paper 2', doi: '10.1000/xyz456' },
    { title: 'Paper 3', doi: '10.1000/xyz789' }
  ],
  scopusPapers: [
    { title: 'Paper 1', doi: '10.1000/xyz123' },
    { title: 'Paper 2', doi: '10.1000/xyz456' }
  ]
};

const App = () => {
  const [isMessagePanelOpen, setMessagePanelOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Calculate missing papers on Scopus using DOI
  const missingPapers = data.googleScholarPapers.filter(
    paper => !data.scopusPapers.some(scopusPaper => scopusPaper.doi === paper.doi)
  );
  const missingPapersCount = missingPapers.length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile View */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="relative w-full h-full bg-white p-6">
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <HamburgerMenu onClose={() => setMenuOpen(false)} />
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold">Hi, Farhan Khan</h1>
              <button
                className="text-2xl"
                onClick={() => setMenuOpen(true)}
              >
                <FaBars />
              </button>
            </div>
            {/* Search bar in mobile view */}
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Search ..."
                type="text"
              />
            </div>
            {/* Content for Mobile View */}
              <div>
              <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Total Publications</p>
                <h2 className="text-2xl font-semibold">12</h2>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Total Citations</p>
                <h2 className="text-2xl font-semibold">7</h2>
              </div>
              </div>
            
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">H-Index</p>
                <h2 className="text-2xl font-semibold">2</h2>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">i10-Index</p>
                <h2 className="text-2xl font-semibold">0</h2>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Google Scholar Citations</p>
                <div className="flex items-center justify-center h-40">
                  <CitationsGraph data={data.citationsData} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Google Scholar Publications</p>
                <div className="flex items-center justify-center h-40">
                  <PublicationsGraph data={data.publicationsData} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Scopus Citations</p>
                <div className="flex items-center justify-center h-40">
                  <CitationsGraph data={data.scopusData} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500">Scopus Publications</p>
                <div className="flex items-center justify-center h-40">
                  <PublicationsGraph data={data.publicationsData} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Missing Research Papers</h2>
                <ol className="list-disc list-inside pb-3 text-left">
                  {missingPapers.map((paper, index) => (
                    <li key={index}>
                      {paper.title} - DOI: <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.doi}</a>
                    </li>
                  ))}
                </ol>
                <p className="text-red-500 font-semibold">
                  {missingPapersCount} papers are present on Google Scholar but are missing on Scopus. Please add them.
                </p>
                <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                  Add Papers
                </button>
              </div>
            </div>

            {isMessagePanelOpen && (
              <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end">
                <div className="w-80 h-full bg-white p-6">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500">Messages</p>
                    <AiOutlineClose
                      className="text-gray-500 text-2xl cursor-pointer"
                      onClick={() => setMessagePanelOpen(false)}
                    />
                  </div>
                  <MessageComponent />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex">
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Hi, Farhan Khan</h1>
              <p className="text-gray-500">Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <input
                className="px-4 py-2 border rounded-lg"
                placeholder="Search ..."
                type="text"
              />
              <i className="fas fa-bell text-gray-400 text-xl"> </i>
              <FiMessageSquare 
                className="text-gray-600 text-2xl cursor-pointer" 
                onClick={() => setMessagePanelOpen(!isMessagePanelOpen)} 
              />
              <button
                className="text-2xl"
                onClick={() => setMenuOpen(true)}
              >
                <FaBars />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Total Publications</p>
              <h2 className="text-2xl font-semibold">12</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Total Citations</p>
              <h2 className="text-2xl font-semibold">7</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">H-Index</p>
              <h2 className="text-2xl font-semibold">2</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">i10-Index</p>
              <h2 className="text-2xl font-semibold">0</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Google Scholar Citations</p>
              <div className="flex items-center justify-center h-40">
                <CitationsGraph data={data.citationsData} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Google Scholar Publications</p>
              <div className="flex items-center justify-center h-40">
                <PublicationsGraph data={data.publicationsData} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Scopus Citations</p>
              <div className="flex items-center justify-center h-40">
                <CitationsGraph data={data.scopusData} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Scopus Publications</p>
              <div className="flex items-center justify-center h-40">
                <PublicationsGraph data={data.publicationsData} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6">
            <h2 className="text-2xl font-semibold mb-4">Missing Research Papers</h2>
            <ol className="list-disc list-inside pb-3 text-left">
              {missingPapers.map((paper, index) => (
                <li key={index}>
                  {paper.title} - DOI: <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.doi}</a>
                </li>
              ))}
            </ol>
            <p className="text-red-500 font-semibold">
              {missingPapersCount} papers are present on Google Scholar but are missing on Scopus. Please add them.
            </p>
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
              Add Papers
            </button>
          </div>

          {isMessagePanelOpen && (
            <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end">
              <div className="w-80 h-full bg-white p-6">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">Messages</p>
                  <AiOutlineClose
                    className="text-gray-500 text-2xl cursor-pointer"
                    onClick={() => setMessagePanelOpen(false)}
                  />
                </div>
                <MessageComponent />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
