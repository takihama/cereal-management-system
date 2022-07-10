import React, { useRef, useState } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Stack, Text,
} from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { Product } from '../../../types';

interface CreateProductModalProps {
  onCreateProduct: (product: Product) => void
  isOpen: boolean
  onClose: () => void
}
export default function CreateProductModal({
  onCreateProduct, isOpen, onClose,
}: CreateProductModalProps) {
  const [productInputValues, setProductInputValues] = useState<Product>({
    id: 0,
    name: '',
    code: '',
    image: '',
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
      id: 0,
      name: '',
      code: '',
      image: '',
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
            <FormLabel htmlFor="name">Product name</FormLabel>
            <Input id="name" name="name" type="text" value={productInputValues.name} ref={initialRef} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="code">Product code</FormLabel>
            <Input id="code" name="code" type="text" value={productInputValues.code} onChange={handleInputChanges} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="image">Image</FormLabel>
            <Input id="image" name="image" type="text" value={productInputValues.image} onChange={handleInputChanges} />
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
