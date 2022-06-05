import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { AiOutlineTool } from 'react-icons/ai';
import { ProductionOrder } from '../../../types';

interface CreateProductionModalProps {
  onCreateProduction: (product: ProductionOrder) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateProductionModal(
  { onCreateProduction, isOpen, onClose }: CreateProductionModalProps,
) {
  const [productionInputValues, setProductionInputValues] = useState<ProductionOrder>({
    id: '',
    date: '',
    manufacturer: '',
    status: 'draft',
    quantity: 0,
    startedOn: '',
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
      id: '',
      date: '',
      manufacturer: '',
      status: 'draft',
      quantity: 0,
      startedOn: '',
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
            <FormLabel htmlFor="order">Production order</FormLabel>
            <Input id="id" name="id" type="text" value={productionInputValues.id} ref={initialRef} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input id="date" name="date" type="text" value={productionInputValues.date} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="manufacturer">Manufacturer</FormLabel>
            <Input id="manufacturer" name="manufacturer" type="text" value={productionInputValues.manufacturer} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="quantity">Quantity</FormLabel>
            <Input id="quantity" name="quantity" type="text" value={productionInputValues.quantity} onChange={handleInputChanges} />
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
