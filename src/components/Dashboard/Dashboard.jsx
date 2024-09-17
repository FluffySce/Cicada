import React from 'react';
import CitationsGraph from '../Graphs/CitationsGraph';
import PublicationsGraph from '../Graphs/PublicationsGraph';
import SearchBar from '../Search/SearchBar';
import ExportButton from '../Export/ExportButton';

const Dashboard = ({ data }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul>
          <li><a href="#" className="block py-2">Home</a></li>
          <li><a href="#" className="block py-2">Research Summary</a></li>
          <li><a href="#" className="block py-2">Export Data</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Research Paper Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Research Paper Summary</h2>
          <SearchBar />
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <p>Here you can add the summary of your research paper.</p>
          </div>
        </section>

        {/* Graphs Section */}
        <section className="flex">
          <div className="w-full md:w-1/2 lg:w-2/3 pr-2">
            <CitationsGraph data={data.citationsData} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 pl-2">
            <PublicationsGraph data={data.publicationsData} />
          </div>
        </section>

        <ExportButton className="mt-6" />
      </main>
    </div>
  );
};

export default Dashboard;
