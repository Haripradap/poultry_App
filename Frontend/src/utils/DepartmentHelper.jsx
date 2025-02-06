import BatchButton from "./BatchButton";

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        sortable: true,
        width: "70px"
    },
    {
        name: "Batch Name",
        selector: (row) => row.batch_name,
        sortable: true
    },
    {
        name: "Batch Number",
        selector: (row) => row.batch_number,
        sortable: true
    },
    {
        name: "Start Date",
        selector: (row) => new Date(row.start_date).toLocaleDateString(),
        sortable: true
    },
    {
        name: "Initial Stock",
        selector: (row) => row.initial_stock,
        sortable: true
    },
    {
        name: "Initial Feed",
        selector: (row) => row.initial_feed,
        sortable: true
    },
    {
        name: "Bill",
        selector: (row) => row.bill ? (
          <a href={`http://localhost:5000${row.bill}`} target="_blank" rel="noopener noreferrer">View Bill</a>
        ) : 'No Bill',
    },
    {
        name: "Action",
        cell: (row) => <BatchButton batchId={row._id} onBatchDeleted={handleBatchDeleted} />
    },
];
