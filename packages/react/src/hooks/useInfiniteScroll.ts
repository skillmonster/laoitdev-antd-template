import { RefetchOptions } from '@tanstack/react-query'; // Import RefetchOptions for fetch control
import { useCallback, useEffect, useState } from 'react'; // Hooks for behavior
import { GroupBase, OptionsOrGroups } from 'react-select'; // react-select typing

// Define the type for individual options in the dropdown
interface OptionType {
    label: string | number | null;
    value: string | number | null;
}

// Interface for the hook props
interface InfiniteScrollProps {
    fetchNextPage?: ((options?: RefetchOptions | undefined) => void) | null;
    isLoading: boolean;
    nextPageToken: string | undefined; // Token for identifying the next page
    optionValue?: OptionType[] | undefined; // The current list of options
}

// Custom hook for infinite scroll behavior
const useInfiniteScroll = ({
    fetchNextPage,
    isLoading,
    nextPageToken,
    optionValue = [],
}: InfiniteScrollProps) => {
    const [options, setOptions] = useState<OptionType[]>(optionValue || []);  // State to store all loaded options
    const hasMore = !!nextPageToken;  // Check if there's more data to fetch

    // Trigger fetching more data when scrolling reaches the bottom
    const loadMoreData = useCallback(() => {
        if (!isLoading && hasMore && fetchNextPage) {
            fetchNextPage(); // Fetch next page if more data is available
        }
    }, [isLoading, hasMore, fetchNextPage]);

    // Function to fetch options based on user search input with pagination
    const loadOptions = async (
        search: string,
        prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>
    ) => {
        // Ensure we append to pre-existing filtered options
        const filteredOptions: OptionType[] = search
            ? (optionValue ?? []).filter(({ label }) =>
                label?.toString().toLowerCase().includes(search.toLowerCase())
            )
            : optionValue ?? [];

        // Trigger fetching more data (pagination)
        if (filteredOptions.length === 0 && hasMore && fetchNextPage) {
            await fetchNextPage();
        }

        // Paginate options
        const paginatedOptions = filteredOptions.slice(
            prevOptions.length,
            prevOptions.length + 50 // Let’s display 50 options at a time
        );

        return {
            options: [...paginatedOptions], // Append paginated options to previous options
            hasMore: !!nextPageToken // Keep fetching until no more data
        };
    };

    useEffect(() => {
        // Keep appending the newly fetched data to the already loaded options.
        setOptions(optionValue || []);
    }, [optionValue]);

    useEffect(() => {
        // Auto-fetch data during initial load if no data exists yet.
        if (!isLoading && hasMore && fetchNextPage && options.length === 0) {
            fetchNextPage();
        }
    }, [isLoading, hasMore, fetchNextPage, options.length]);

    return {
        loadOptions,   // For loading options based on search input
        loadMoreData,  // Call when user scrolls down to load more items
        options,       // Provide combined list of options for component to use
    };
};

export default useInfiniteScroll;