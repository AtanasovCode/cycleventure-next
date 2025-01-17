export type SideFiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<{ category?: string[]; frameType?: string[]; brand?: string[] }>>;
};

// used for filters, i.e mtbFilters
export type Filters = {
  name: string;
  value: string;
}