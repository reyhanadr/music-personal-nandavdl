interface Props {
    activeTab: 'now-playing' | 'lyrics';
    onTabChange: (tab: 'now-playing' | 'lyrics') => void;
  }
  
  export default function Tabs({ activeTab, onTabChange }: Props) {
    return (
      <div className="mb-4 mt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
        <nav className="flex space-x-8">
          <button
            onClick={() => onTabChange('now-playing')}
            className={`py-4 px-1 border-t-2 font-bold text-sm ${
              activeTab === 'now-playing' 
                ? 'border-pink-500 text-pink-600 dark:text-pink-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <span className="text-lg">Now Playing</span>
          </button>
          <button
            onClick={() => onTabChange('lyrics')}
            className={`py-4 px-1 border-t-2 font-bold text-sm ${
              activeTab === 'lyrics' 
                ? 'border-pink-500 text-pink-600 dark:text-pink-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <span className="text-lg">Lyrics</span>
          </button>
        </nav>
      </div>
    );
  }