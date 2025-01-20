export const formatSearchParams = (values) => {
    if (!values)
        return {};
    let searchParams = {
        page: values.pagination.page.toString(),
        limit: values.pagination.limit.toString(),
    };
    if (!values.search)
        return searchParams;
    return Object.assign(Object.assign({}, searchParams), { search: values.search });
};
