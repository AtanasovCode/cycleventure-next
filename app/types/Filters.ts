export type SideFiltersProps = {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
  };

// used for filters, i.e mtbFilters
export type Filters = {
    name: string;
    value: string;
}