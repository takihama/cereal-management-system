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
    title: 'Tipo',
    accessor: 'type',
  },
];
export default function RawMaterials() {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const [rawMaterials, setRawMaterials] = useState<RawMaterialsState['rawMaterials']>([]);
  const [searchRawMaterials, setSearchRawMaterials] = useState<RawMaterialsState['searchRawMaterials']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRawMaterials(evt.target.value);
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
          name: 'searchProduct',
          value: searchRawMaterials,
          placeholder: 'Filter by raw material',
          onChange: onSearchChange,
        }}
        buttons={headerButtons}
      />
      <Box padding="4">
        <Box bg="white">
          <CustomTable
            headers={tableHeaders}
            datasource={rawMaterials}
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
