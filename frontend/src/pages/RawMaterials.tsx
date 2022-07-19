import React, { useEffect, useState } from 'react';
import { Box, Stack, useDisclosure } from '@chakra-ui/react';
import { GiWoodPile } from 'react-icons/gi';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../components/header/Header';
import CreateRawMaterialModal from '../components/modals/raws/CreateRawModal';
import { NewRaw, Raw } from '../types';
import CustomTable from '../components/table/CustomTable';
import rawsService from '../services/raws';

interface RawMaterialsState {
  rawMaterials: Array<Raw>
  searchRawMaterials: string
}
const tableHeaders = [
  {
    title: 'Code',
    accessor: 'code',
  },
  {
    title: 'Description',
    accessor: 'description',
  },
  {
    title: 'Type',
    accessor: 'type',
  },
];
export default function RawMaterials() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const [rawMaterials, setRawMaterials] = useState<RawMaterialsState['rawMaterials']>([]);
  const [searchRawCode, setSearchRawCode] = useState<RawMaterialsState['searchRawMaterials']>('');

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRawCode(evt.target.value);
  };

  const handleCreateRawMaterial = () => {
    onCreateOpen();
  };

  const handleImportRawMaterials = () => {
    console.log('handleImportRawMaterials');
  };

  const createRawMaterial = (rawMaterial: NewRaw) => {
    rawsService
      .create(rawMaterial)
      .then((savedRaw: Raw) => {
        setRawMaterials(rawMaterials.concat(savedRaw));
      })
      .catch((err) => console.log(err.message));
  };

  const headerButtons = [
    {
      name: 'Create',
      icon: BsPlus,
      onClick: handleCreateRawMaterial,
    },
    {
      name: 'Import',
      icon: BiImport,
      onClick: handleImportRawMaterials,
    },
  ];

  useEffect(() => {
    rawsService
      .getAll()
      .then((storedRaws: Array<Raw>) => {
        setRawMaterials(storedRaws);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Stack width="full">
      <Header
        title="Raws"
        icon={GiWoodPile}
        search={{
          name: 'searchRawCode',
          value: searchRawCode,
          placeholder: 'Filter by raw code',
          onChange: handleSearchChange,
        }}
        buttons={headerButtons}
      />
      <Box padding="4">
        <Box bg="white">
          <CustomTable
            headers={tableHeaders}
            datasource={rawMaterials
              .filter((raw) => raw.code.toLowerCase().includes(searchRawCode.toLowerCase()))}
          />
        </Box>
      </Box>
      <CreateRawMaterialModal
        onCreateRaw={createRawMaterial}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      />
    </Stack>
  );
}
