import { TableStyle } from '@/models/table';
import { themes } from '@/styles/theme/themeConfig';

export const tableStyle: TableStyle = {
  enableTopToolbar: true,
  enableStickyHeader: true,
  enableSorting: false,
  enableRowNumbers: false,
  enableFullScreenToggle: false,
  enableHiding: false,
  enableDensityToggle: false,
  enableEditing: false,
  enableFilters: false,
  enableColumnFilters: false,
  enableColumnActions: false,
  createDisplayMode: 'modal',
  editDisplayMode: 'modal',
  enablePagination: true,
  manualPagination: false,
  mrtTheme: () => ({
    baseBackgroundColor: themes.token?.colorBgContainer,
  }),
  muiTablePaperProps: {
    sx: {
      padding: 1,
      px: 2,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      height: '100%',
    },
  },
  muiTableProps: {
    sx: {
      width: '100%',
      overflow: 'auto',
      height: '100%',
    },
  },
  muiTableContainerProps: {
    sx: {
      width: '100%',
      height: '100%',
      maxHeight: 'calc(75vh - 200px)',
      overflowY: 'auto',
      overflowX: 'auto',
    },
  },
  muiTableHeaderProps: {
    sx: {
      top: 0,
      position: 'sticky',
      zIndex: 1,
    },
  },
  muiTableHeadCellProps: {
    sx: () => ({
      color: themes.token?.colorText,
      width: 'max-content',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
    }),
  },
  muiTableBodyCellProps: {
    sx: {
      width: 'max-content',
      textAlign: 'left',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  muiTableButtonProps: {
    sx: {
      overflow: 'auto',
    },
  },
  muiTableFooterProps: {
    sx: {
      position: 'sticky',
      bottom: 0,
      backgroundColor: '#FFF',
      zIndex: 1,
    },
  },
  muiTableBottomToolbarProps: {
    sx: {
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
    },
  },
  paginationDisplayMode: 'pages',
};

export const muiStyles = (() => {
  const muiPaginationProps = {
    showRowsPerPage: false,
    // Customization of the pagination styles
    sx: {
      // Pagination Main Container styles
      '& .MuiPagination-ul': {
        justifyContent: 'center',
      },
      // Changing the color of the page numbers
      '& .MuiPaginationItem-root': {
        color: themes.token?.colorText,
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          color: themes.components?.Button?.colorPrimary, // White text for the selected page
          border: `1px solid ${themes.token?.colorPrimary}`, // Custom border color
          borderRadius: '4px', // Optional: Slightly round the border corners
        },
      },
      // Hover effects on the pagination items
      '& .MuiPaginationItem-root:hover': {
        backgroundColor: themes.token?.colorBgLayout,
      },
      // Disable style
      '& .MuiPaginationItem-root.Mui-disabled': {
        color: themes.token?.colorTextTertiary,
        border: `1px solid ${themes.token?.colorTextTertiary}`, // Border color for disabled pagination items
      },
    },
  };

  return {
    muiPaginationProps,
  };
})();
