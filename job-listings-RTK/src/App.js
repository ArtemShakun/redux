import { FilterPanel } from 'feature/filters/FilterPanel';
import { JobList } from 'feature/position/JobList';
import { TheHeader } from 'components/TheHeader';

function App() {
    return (
        <>
            <TheHeader />
            <div className="container">
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
