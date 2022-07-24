import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Button, FormControl, FormErrorMessage, FormLabel, Icon, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text,
} from '@chakra-ui/react';
import { FaBoxOpen } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { BiTrashAlt } from 'react-icons/bi';
import { NewProduct, ProductRaw, Raw } from '../../../types';

const initialProduct: NewProduct = {
  code: '',
  name: '',
  description: '',
  image: '',
  raws: [],
};

const initialProductRaw: Array<ProductRaw> = [
  {
    id: 0,
    rawId: 0,
    code: '',
    type: '',
    description: '',
    quantity: 0,
    unit: 'g',
  },
];

const initialRawSelectOptions: Array<Raw> = [
  {
    id: 0,
    code: 'A',
    type: '',
    description: '',
  },
  {
    id: 1,
    code: 'B',
    type: '',
    description: '',
  },
];

interface CreateProductModalProps {
  onCreateProduct: (product: NewProduct) => void
  isOpen: boolean
  onClose: () => void
}

export default function CreateProductModal({
  onCreateProduct, isOpen, onClose,
}: CreateProductModalProps) {
  const initialRef = useRef<HTMLInputElement>(null);
  const [productInputValues, setProductInputValues] = useState<NewProduct>(initialProduct);
  const [rawSelectOptions] = useState<Array<Raw>>(initialRawSelectOptions);

  const isError = (input: string | undefined) => !input && input === '';

  const handleProductInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductInputValues({
      ...productInputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleProductRawInputChanges = (idx: number) => (
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setProductInputValues((prevState) => ({
        ...prevState,
        raws: prevState.raws.map((raw, index) => (index !== idx ? raw : {
          ...raw,
          [evt.target.name]: evt.target.value,
        })),
      }));
    }
  );

  const handleAddProductRaw = () => {
    setProductInputValues((prevState) => ({
      ...prevState,
      raws: prevState.raws.concat({
        ...initialProductRaw,
        id: uuidv4(),
      }),
    }));
  };

  const handleDeleteProductRaw = (idx: number) => {
    setProductInputValues((prevState) => ({
      ...prevState,
      raws: prevState.raws.filter((_, index) => index !== idx),
    }));
  };

  const handleOnCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCreateProduct(productInputValues);
    setProductInputValues(initialProduct);
    onClose();
  };

  const handleOnCancel = () => {
    setProductInputValues(initialProduct);
    onClose();
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={handleOnCancel}
      size="xl"
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
        <form onSubmit={handleOnCreate}>
          <ModalBody>
            <FormControl isInvalid={isError(productInputValues.code)}>
              <FormLabel htmlFor="code">Code</FormLabel>
              <Input id="code" name="code" type="text" value={productInputValues.code} ref={initialRef} onChange={handleProductInputChanges} />
              <FormErrorMessage>Code is required.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={isError(productInputValues.name)}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" type="text" value={productInputValues.name} onChange={handleProductInputChanges} />
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input id="description" name="description" type="text" value={productInputValues.description} onChange={handleProductInputChanges} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input id="image" name="image" type="text" value={productInputValues.description} onChange={handleProductInputChanges} />
            </FormControl>

            <FormControl>
              <Stack direction="row">
                <FormLabel htmlFor="type">Raws</FormLabel>
                <Button size="sm" onClick={handleAddProductRaw}>
                  <Icon as={BsPlus} fontSize="md" />
                </Button>
              </Stack>
              <Stack>
                {
                  productInputValues.raws.map((productRaw: ProductRaw, idx: number) => (
                    <Stack direction="row" align="center" key={productRaw.id}>
                      <Select placeholder="Select raw">
                        {rawSelectOptions.map((rawOption: Raw) => (
                          <option key={rawOption.id} value={rawOption.id}>
                            {rawOption.code}
                          </option>
                        ))}
                      </Select>
                      <Input id="quantity" name="quantity" type="number" w="4xs" value={productRaw.quantity} onChange={() => handleProductRawInputChanges(idx)} />
                      <Select placeholder="Select unit" w="xs">
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="un">un</option>
                      </Select>
                      <Button size="sm" onClick={() => handleDeleteProductRaw(idx)}>
                        <Icon as={BiTrashAlt} fontSize="md" />
                      </Button>
                    </Stack>
                  ))
                }
              </Stack>
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
