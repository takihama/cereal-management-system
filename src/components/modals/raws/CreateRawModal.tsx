import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { GiWoodPile } from 'react-icons/gi';
import { Raw } from '../../../types';

interface CreateRawMaterialModalProps {
  onCreateRaw: (raw: Raw) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateRawMaterialModal({
  onCreateRaw, isOpen, onClose,
}: CreateRawMaterialModalProps) {
  const [rawInputValues, setProductInputValues] = useState<Raw>({
    id: 0,
    name: '',
    code: '',
    description: '',
  });
  const handleInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductInputValues({
      ...rawInputValues,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleOnCreate = () => {
    onCreateRaw(rawInputValues);
    setProductInputValues({
      id: 0,
      name: '',
      code: '',
      description: '',
    });
    onClose();
  };
  const initialRef = useRef<HTMLInputElement>(null);
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
            <FormLabel htmlFor="name">Raw material name</FormLabel>
            <Input id="name" name="name" type="text" value={rawInputValues.name} ref={initialRef} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="code">Raw material code</FormLabel>
            <Input id="code" name="code" type="text" value={rawInputValues.code} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input id="description" name="description" type="text" value={rawInputValues.description} onChange={handleInputChanges} />
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
