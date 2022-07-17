import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text,
} from '@chakra-ui/react';
import { GiWoodPile } from 'react-icons/gi';
import { NewRaw } from '../../../types';

const initialRaw: NewRaw = {
  code: '',
  type: '',
  description: '',
};

interface CreateRawMaterialModalProps {
  onCreateRaw: (raw: NewRaw) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateRawMaterialModal({
  onCreateRaw, isOpen, onClose,
}: CreateRawMaterialModalProps) {
  const initialRef = useRef<HTMLInputElement>(null);
  const [rawInputValues, setProductInputValues] = useState<NewRaw>(initialRaw);

  const handleInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductInputValues({
      ...rawInputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setProductInputValues({
      ...rawInputValues,
      type: evt.target.value,
    });
  };

  const handleOnCreate = () => {
    onCreateRaw(rawInputValues);
    setProductInputValues(initialRaw);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="gray.100">
          <Stack
            direction="row"
            align="center"
          >
            <Icon as={GiWoodPile} />
            <Text>Create raw material</Text>
          </Stack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="code">Code</FormLabel>
            <Input id="code" name="code" type="text" value={rawInputValues.code} ref={initialRef} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input id="description" name="description" type="text" value={rawInputValues.description} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type">Tipo</FormLabel>
            <Select id="type" name="type" onChange={handleSelectChange}>
              <option value="bulk">Bulk</option>
              <option value="package">Package</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Stack direction="row" spacing="4">
            <Button onClick={handleOnCreate}>
              Create
            </Button>
            <Button onClick={onClose} variant="cancel">
              Cancel
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
