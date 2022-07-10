import React, { useEffect, useState } from 'react';
import {
  Button, Icon, Input, InputGroup, InputRightElement, Select, Stack,
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { BiFilterAlt } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

interface Search {
  key: string
  value: string
}
interface Filter {
  searchKey: string
  placeholder: string
}
interface CustomTableProps {
  titles: Array<string>
  data: Array<Object>
  filter: Filter | null
}
interface CustomTableState {
  filteredData: Array<Object>
  searchName: string
  page: number
  rowsPerPage: number
}

const filterObjArrByPattern = (arr: Array<Object>, pattern: Search) => (
  arr.filter((o) => (
    o[pattern.key as keyof typeof o].toString().toLowerCase().includes(pattern.value.toLowerCase())
  ))
);

export default function CustomTableWFilter({ titles, data, filter }: CustomTableProps) {
  const [filteredData, setFilteredData] = useState<CustomTableState['filteredData']>(data);
  const [searchName, setSearchName] = useState<CustomTableState['searchName']>('');
  const [page, setPage] = useState<CustomTableState['page']>(1);
  const [rowsPerPage, setRowsPerPage] = useState<CustomTableState['rowsPerPage']>(10);
  const handleFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(evt.target.value);
  };
  const handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(evt.target.value));
    setPage(1);
  };
  const handleIncrementPage = () => {
    setPage((filteredData.length - page * rowsPerPage) > 0 ? page + 1 : page);
  };
  const handleDecrementPage = () => {
    setPage(page === 1 ? 1 : page - 1);
  };
  useEffect(() => {
    if (filter) {
      setFilteredData(filterObjArrByPattern(data, { key: filter !== null ? filter.searchKey : '', value: searchName }));
    } else {
      setFilteredData(data);
    }
  }, [searchName, data]);
  return (
    <TableContainer>
      <Stack
        direction="row"
        justify="flex-end"
        align="center"
        paddingX="4"
      >
        {filter && (
          <Stack
            direction="row"
            align="center"
            width="full"
            spacing="4"
          >
            <Icon
              color="primary.500"
              fontWeight="500"
              as={BiFilterAlt}
            />
            <Text
              color="primary.500"
              fontWeight="500"
            >
              z
            </Text>
            <InputGroup size="sm" maxWidth="md">
              <Input
                type="text"
                value={searchName}
                onChange={handleFilterChange}
                placeholder={filter.placeholder}
              />
              <InputRightElement>
                <Icon as={IoMdClose} />
              </InputRightElement>
            </InputGroup>
          </Stack>
        )}
      </Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            {titles.map((title) => (
              <Th key={title}>{title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
            <Tr>
              {Object.entries(row).map((key, index) => (
                <Td>{Object.entries(row)[index][1]}</Td>
              ))}
            </Tr>
          ))}
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
          {filteredData.length === 0 ? 0 : (1 + (page - 1) * rowsPerPage)}
          &nbsp;to&nbsp;
          {rowsPerPage * page > filteredData.length ? filteredData.length : rowsPerPage * page}
          &nbsp;of&nbsp;
          {filteredData.length}
          &nbsp;entries.
        </Text>
        <Stack
          direction="row"
          align="center"
        >
          <Text>Show</Text>
          <Select
            size="sm"
            minWidth="80px"
            onChange={handleSelectChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <Text>entries</Text>
        </Stack>
        <Stack direction="row" paddingY="4">
          <Button
            size="sm"
            _focus={{ boxShadow: 'none' }}
            onClick={handleDecrementPage}
          >
            Previous
          </Button>
          <Button
            size="sm"
            bg="primary.100"
            _focus={{ boxShadow: 'none' }}
          >
            {page}
          </Button>
          <Button
            size="sm"
            _focus={{ boxShadow: 'none' }}
            onClick={handleIncrementPage}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </TableContainer>
  );
}
