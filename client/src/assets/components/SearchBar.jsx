import {Search} from 'lucide-react'
export default function SearchBar({ searchText, onChange, onSearch }) {
  return (
    <div className="flex items-center h-12 w-full bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm">
      <input
        type="text"
        placeholder="Search for anything..."
        value={searchText}
        onChange={onChange}
        className="flex-grow py-1 text-gray-700 focus:outline-none"
      />
      <button onClick={onSearch} type="button" className="text-gray-500 hover:text-black">
        <Search size={22} />
      </button>
    </div>
  );
}
