import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { GiWoodPile } from 'react-icons/gi';
import { BsPlus } from 'react-icons/bs';
import { BiImport } from 'react-icons/bi';
import Header from '../components/header/Header';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}
interface RawMaterialsState {
  searchRawMaterials: string
}
export default function RawMaterials() {
  const [searchRawMaterials, setSearchRawMaterials] = useState<RawMaterialsState['searchRawMaterials']>('');
  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRawMaterials(evt.target.value);
  };
  const handleCreateRawMaterial = () => {
    console.log('handleCreateRawMaterial');
  };
  const handleImportRawMaterials = () => {
    console.log('handleImportRawMaterials');
  };
  const headerButtons: Array<HeaderButtons> = [{
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
    </Stack>
  );
}
