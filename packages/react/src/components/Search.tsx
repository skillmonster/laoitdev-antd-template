import { useTheme } from '@/containers/layouts/admin/ThemeContext';
import { RefetchOptions } from '@tanstack/react-query';
import { Spin } from 'antd';
import useInfiniteScroll from 'hooks/useInfiniteScroll'; // Custom infinite scroll hook
import { t } from 'i18next';
import { IOptionSelected, OptionType } from 'models/search';
import { AsyncPaginate } from 'react-select-async-paginate'; // Async select
import darkThemes from 'styles/theme/darkTheme.json';
import lightThemes from 'styles/theme/lightTheme.json';

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
  // Use the theme from Theme Context
  const { isDark } = useTheme();

  // Detect the current theme (dark or light)
  const currentTheme = isDark ? darkThemes : lightThemes;

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
        name={name}
        loadOptions={loadOptions} // Provide options based on search input
        onChange={(selected) => onFilterSubmit({ id: selected?.value })} // Handle selected item
        additional={{
          page: 1, // Infinite scroll pagination starting point
        }}
        menuPlacement="auto"
        menuPosition="fixed"
        onMenuScrollToBottom={loadMoreData} // Trigger loading more data on scroll down
        isClearable
        isSearchable
        placeholder={t(placeholder)}
        loadingMessage={() =>
          isLoading ? <Spin size="small" /> : t('Loading...')
        }
        noOptionsMessage={() => t('No more results')}
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: currentTheme?.token?.colorBgContainer,
            boxShadow: 'none', // No focus shadow
            '&:hover': {
              borderColor: currentTheme?.token?.colorPrimary, // Hover styles
            },
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: currentTheme?.token?.colorBgContainer,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? currentTheme?.token?.colorPrimary
              : state.isFocused
                ? `${currentTheme?.token?.colorPrimary}20` // Add lightened color on focus
                : currentTheme?.token?.colorBgContainer,
            color: state.isSelected
              ? currentTheme?.token?.colorText
              : currentTheme?.token?.colorText,
            '&:active': {
              backgroundColor:
                currentTheme?.components?.Button?.colorPrimaryActive,
            },
          }),
          placeholder: (provided) => ({
            ...provided,
            color: currentTheme?.token?.colorText,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: currentTheme?.token?.colorText,
          }),
          input: (provided) => ({
            ...provided,
            color: currentTheme?.token?.colorText,
          }),
        }}
      />
    </div>
  );
};
