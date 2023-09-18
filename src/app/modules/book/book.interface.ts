export type IPaginationOptions = {
  page?: string;
  size?: string;
  sortBy?: string;
  sortOrder?: string;
};

export type IFiltersOption = {
  searchTerm: string;
  minPrice: string;
  maxPrice: string;
  category: string;
};

export type IBookFilterRequest = {
  searchTerm?: string;
};
