import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Stack, Text,
} from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { NewProduct } from '../../../types';

interface CreateProductModalProps {
  onCreateProduct: (product: NewProduct) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateProductModal({
  onCreateProduct, isOpen, onClose,
}: CreateProductModalProps) {
  const [productInputValues, setProductInputValues] = useState<NewProduct>({
    name: '',
    code: '',
    description: '',
  });
  const handleInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductInputValues({
      ...productInputValues,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleOnCreate = () => {
    onCreateProduct(productInputValues);
    setProductInputValues({
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
            <Icon as={FaBoxOpen} />
            <Text>Create product</Text>
          </Stack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="code">Code</FormLabel>
            <Input id="code" name="code" type="text" value={productInputValues.code} ref={initialRef} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" name="name" type="text" value={productInputValues.name} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input id="description" name="description" type="text" value={productInputValues.description} onChange={handleInputChanges} />
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
