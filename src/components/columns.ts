import { format } from 'date-fns';
export const COLUMNS = [
    
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        sticky: 'left'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }: any) => {
            return format(new Date(value), 'dd/MM/yyyy')
        },
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
    },
    {
        Header: 'age',
        Footer: 'age',
        accessor: 'age',
    },
    {
        Header: 'email',
        Footer: 'email',
        accessor: 'email',
    },
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
        sticky: 'right'
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        accessor: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            },
        ]
    },
]