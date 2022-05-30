import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { AiOutlineTool } from 'react-icons/ai';

interface ProductionOrder {
  order: string
  date: string
  manufacturer: string
  status: string
  quantity: number
  startedOn?: string
}
interface CreateProductionModalProps {
  onCreateProduction: (product: ProductionOrder) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateProductionModal(
  { onCreateProduction, isOpen, onClose }: CreateProductionModalProps,
) {
  const [productionInputValues, setProductionInputValues] = useState<ProductionOrder>({
    order: '',
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
      order: '',
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
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack
            direction="row"
            align="center"
          >
            <Icon as={AiOutlineTool} />
            <Text>Create Production Order</Text>
          </Stack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="order">Production order</FormLabel>
            <Input id="order" name="order" type="text" value={productionInputValues.order} ref={initialRef} onChange={handleInputChanges} />
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
          <Stack
            direction="row"
            spacing="4"
          >
            <Button
              bg="primary.100"
              _focus={{ boxShadow: 'none' }}
              _hover={{
                bg: 'primary.300',
              }}
              onClick={handleOnCreate}
            >
              Create
            </Button>
            <Button
              bg="gray.100"
              _focus={{ boxShadow: 'none' }}
              _hover={{
                bg: 'gray.300',
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
