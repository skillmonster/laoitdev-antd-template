import { RefetchOptions } from '@tanstack/react-query'; // Import RefetchOptions for fetch control
import { useCallback, useEffect } from 'react';          // Import hooks
import { GroupBase, OptionsOrGroups } from 'react-select'; // react-select typings for auto-complete

// Define the type for individual options in the dropdown
interface OptionType {
    label: string | number | null;
    value: string | number | null;
}

// Interface for the hook props
interface InfiniteScrollProps {
    fetchNextPage?: ((options?: RefetchOptions | undefined) => void) | null; // Function to fetch the next page
    isLoading: boolean;                                                      // Indicates if data is currently being loaded
    nextPageToken: string | undefined;                                       // Token for identifying the next page
    optionValue?: OptionType[] | undefined;                                  // The current list of options
}

// Custom hook for infinite scroll behavior
const useInfiniteScroll = ({
    fetchNextPage,
    isLoading,
    nextPageToken,
    optionValue,
}: InfiniteScrollProps) => {
    // Check if there are more pages to load
    const hasMore = !!nextPageToken;

    // Function called to load more data (usually triggered when scrolling to the bottom)
    const loadMoreData = useCallback(() => {
        if (!isLoading && hasMore && fetchNextPage) {
            fetchNextPage();  // Fetch the next page if not loading and more data available
        }
    }, [isLoading, hasMore, fetchNextPage]);

    // Function to fetch and filter options based on user search input (with pagination)
    const loadOptions = async (
        search: string,  // The search input from the user
        prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>  // Options already loaded
    ) => {
        // Simulate network delay to fetch/filter
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Filter the current options based on the search string (case insensitive)
        const filteredOptions = search
            ? (optionValue ?? []).filter(({ label }) =>
                label?.toString().toLowerCase().includes(search.toLowerCase())
            )
            : optionValue ?? [];

        // If filtered options are empty and there's more data to load, try fetching additional pages
        if (filteredOptions.length === 0 && hasMore && fetchNextPage) {
            // Trigger fetch for the next page
            await fetchNextPage();
            // Return an empty array temporarily, pagination will handle any further changes.
            return {
                options: [],  // Return no options while waiting for new data
                hasMore       // Indicate that loading may continue
            };
        }

        // Paginate options and load only the requested batch (e.g., 25 at a time)
        const paginatedOptions = filteredOptions.slice(
            prevOptions.length,
            prevOptions.length + 25
        );

        // Return the paginated options plus indication if more data is available
        return {
            options: paginatedOptions,
            hasMore: filteredOptions.length > prevOptions.length + 50  // Check if there's more to load
        };
    };

    // Automatically fetch the next page when no options are available yet
    useEffect(() => {
        if (!isLoading && hasMore && fetchNextPage && (!optionValue || optionValue.length === 0)) {
            fetchNextPage();  // Load data when the component initializes and there's no data yet
        }
    }, [isLoading, hasMore, fetchNextPage, optionValue]);

    return {
        loadOptions,  // Function to load options based on search & pagination
        loadMoreData, // Function to trigger loading more data (usually triggered by scroll)
    };
};

export default useInfiniteScroll;