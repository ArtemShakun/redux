import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './position-slice';
import { selectFilters } from 'feature/filters/filter-slice';

export const usePositions = () => {
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) => {
        return selectVisiblePositions(state, currentFilters);
    });

    return positions;
};
