import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormErrorMessage, FormLabel,
  Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
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

  const isError = (input: string) => input === '';

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

  const handleOnCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCreateRaw(rawInputValues);
    setProductInputValues(initialRaw);
    onClose();
  };

  const handleOnCancel = () => {
    setProductInputValues(initialRaw);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={handleOnCancel}
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
        <form onSubmit={handleOnCreate}>
          <ModalBody>
            <FormControl isInvalid={isError(rawInputValues.code)}>
              <FormLabel htmlFor="code">Code</FormLabel>
              <Input id="code" name="code" type="text" value={rawInputValues.code} ref={initialRef} onChange={handleInputChanges} />
              <FormErrorMessage>Code is required.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={isError(rawInputValues.description)}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input id="description" name="description" type="text" value={rawInputValues.description} onChange={handleInputChanges} />
              <FormErrorMessage>Description is required.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={isError(rawInputValues.type)}>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Select id="type" name="type" placeholder="Select raw type" onChange={handleSelectChange}>
                <option value="bulk">Bulk</option>
                <option value="primaryPackage">Primary package</option>
                <option value="secondaryPackage">Secondary package</option>
              </Select>
              <FormErrorMessage>Type is required.</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" spacing="4">
              <Button type="submit">
                Create
              </Button>
              <Button onClick={handleOnCancel} variant="cancel">
                Cancel
              </Button>
            </Stack>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
