import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { AiOutlineTool } from 'react-icons/ai';
import { NewProductionOrder } from '../../../types';

interface CreateProductionModalProps {
  onCreateProduction: (product: NewProductionOrder) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateProductionModal(
  { onCreateProduction, isOpen, onClose }: CreateProductionModalProps,
) {
  const [productionInputValues, setProductionInputValues] = useState<NewProductionOrder>({
    code: '',
    client: '',
    description: '',
    status: 'draft',
  });
  const handleInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductionInputValues({
      ...productionInputValues,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleOnCreate = () => {
    onCreateProduction(productionInputValues);
    setProductionInputValues({
      code: '',
      client: '',
      description: '',
      status: 'draft',
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
        <ModalHeader>
          <Stack direction="row" align="center">
            <Icon as={AiOutlineTool} />
            <Text>Create production order</Text>
          </Stack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="order">Code</FormLabel>
            <Input
              id="code"
              name="code"
              type="text"
              value={productionInputValues.code}
              ref={initialRef}
              onChange={handleInputChanges}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="manufacturer">Manufacturer</FormLabel>
            <Input
              id="client"
              name="client"
              type="text"
              value={productionInputValues.client}
              onChange={handleInputChanges}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="order">Description</FormLabel>
            <Input
              id="description"
              name="description"
              type="text"
              value={productionInputValues.description}
              onChange={handleInputChanges}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Stack direction="row" spacing="4">
            <Button onClick={handleOnCreate}>
              Create
            </Button>
            <Button variant="cancel" onClick={onClose}>
              Cancel
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
