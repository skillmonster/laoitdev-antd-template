import { RefetchOptions } from '@tanstack/react-query';
import { Col, Row, Spin } from 'antd';
import useInfiniteScroll from 'hooks/useInfiniteScroll'; // The refactored custom hook
import { t } from 'i18next';
import { AsyncPaginate } from 'react-select-async-paginate';
import { IOptionSelected, OptionType } from 'models/search';
import { themes } from '@/styles/theme/themeConfig';

interface SearchProps {
  fetchNextPage?: ((options?: RefetchOptions | undefined) => void) | null;
  onFilterSubmit: (value: IOptionSelected) => void;
  isLoading: boolean;
  nextPageToken: string | undefined;
  optionValue?: OptionType[] | undefined;
  placeholder: string;
  name: string;
}

// Search Component
export const Search = ({
  fetchNextPage,
  onFilterSubmit,
  isLoading,
  nextPageToken,
  optionValue,
  placeholder,
  name,
}: SearchProps) => {
  // Infinite Scroll hook to fetch more data or search based on input
  const { loadOptions, loadMoreData } = useInfiniteScroll({
    fetchNextPage,
    isLoading,
    nextPageToken, // Pagination token
    optionValue, // Available options
  });

  return (
    <div>
      <AsyncPaginate
        controlShouldRenderValue={true}
        styles={{
          control: (provided) => ({
            ...provided,
            borderColor: themes.token?.colorBorderSecondary,
          }),
        }}
        isClearable
        isSearchable
        loadOptions={loadOptions} // Provide options based on search or scrolling
        onChange={(e) => onFilterSubmit({ id: e?.value })} // Handle selecting a search result
        name={name}
        placeholder={
          <Row>
            <Col>
              <span>{t(placeholder)}</span>
            </Col>
          </Row>
        }
        noOptionsMessage={() => t('no_more_results')} // If no results are available
        loadingMessage={() => <Spin size="small" />} // Show loading indicator
        additional={{
          page: 1, // Start page for pagination
        }}
        menuPlacement="auto"
        menuPosition="fixed"
        onMenuScrollToBottom={loadMoreData} // Call to load more data on scroll down
      />
    </div>
  );
};
