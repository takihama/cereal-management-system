import React, { useState } from 'react';
import {
  Button, Select, Stack,
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';

interface Header {
  header: string
  accessor: string
  render: (data: any) => JSX.Element
}
interface Row {
  id: string | number
}
interface CustomTableProps {
  headers: Array<Header>
  datasource: Array<Row>
}
interface CustomTableState {
  page: number
  rowsPerPage: number
}
export default function CustomTable({ headers, datasource }: CustomTableProps) {
  const [page, setPage] = useState<CustomTableState['page']>(1);
  const [rowsPerPage, setRowsPerPage] = useState<CustomTableState['rowsPerPage']>(10);
  const handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(evt.target.value));
    setPage(1);
  };
  const handleIncrementPage = () => {
    setPage((datasource.length - page * rowsPerPage) > 0 ? page + 1 : page);
  };
  const handleDecrementPage = () => {
    setPage(page === 1 ? 1 : page - 1);
  };
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {
              headers.map(({ accessor, header }) => (
                <Th key={accessor}>
                  <Text>{header}</Text>
                </Th>
              ))
            }
          </Tr>
        </Thead>
        <Tbody>
          {
            datasource.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((dataRow) => (
              <Tr key={dataRow.id}>
                {Object.keys(dataRow).map((key) => {
                  const header = headers.find((h) => h.accessor === key);
                  if (header) {
                    const cell = dataRow[key as keyof typeof dataRow];
                    return (
                      <Td key={key}>
                        {header.render(cell)}
                      </Td>
                    );
                  }
                  return null;
                })}
              </Tr>
            ))
          }
        </Tbody>
      </Table>
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        paddingX="4"
        spacing="4"
      >
        <Text fontSize="sm">
          Showing&nbsp;
          {datasource.length === 0 ? 0 : (1 + (page - 1) * rowsPerPage)}
          &nbsp;to&nbsp;
          {rowsPerPage * page > datasource.length ? datasource.length : rowsPerPage * page}
          &nbsp;of&nbsp;
          {datasource.length}
          &nbsp;entries.
        </Text>
        <Stack direction="row" align="center">
          <Text>Show</Text>
          <Select
            onChange={handleSelectChange}
            size="sm"
            minWidth="80px"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <Text>entries</Text>
        </Stack>
        <Stack direction="row" paddingY="4">
          <Button onClick={handleDecrementPage} variant="cancel" size="sm">
            Previous
          </Button>
          <Button size="sm">
            {page}
          </Button>
          <Button onClick={handleIncrementPage} variant="cancel" size="sm">
            Next
          </Button>
        </Stack>
      </Stack>
    </TableContainer>
  );
}
