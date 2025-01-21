export const formatSearchParams = (values?: {
  search?: string;
  pagination: {
    page: number;
    limit: number;
  };
}) => {
  if (!values) return {};

  let searchParams = {
    page: values.pagination.page.toString(),
    limit: values.pagination.limit.toString(),
  };

  if (!values.search) return searchParams;

  return { ...searchParams, search: values.search };
};
