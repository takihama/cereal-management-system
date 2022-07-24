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

const initialRaw: Raw = {
  id: -1,
  code: '',
  type: '',
  description: '',
};

const initialProductRaw: Array<ProductRaw> = [
  {
    id: 0,
    raw: initialRaw,
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

  const isTextEmpty = (input: string | undefined) => !input || input === '';
  const isNumberInvalid = (input: number | undefined) => !input || Number.isNaN(input);

  console.log(productInputValues);

  const handleProductInputChanges = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProductInputValues({
      ...productInputValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleProductRawInputChanges = (idx: number) => (
    (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      setProductInputValues((prevState) => ({
        ...prevState,
        raws: prevState.raws.map((raw, index) => (index !== idx ? raw : {
          ...raw,
          [evt.target.name]: evt.target.value,
        })),
      }));
    }
  );

  const handleSelectProductRawChanges = (idx: number) => (
    (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setProductInputValues((prevState) => ({
        ...prevState,
        raws: prevState.raws.map((raw, index) => (index !== idx ? raw : {
          ...raw,
          raw: initialRawSelectOptions
            .find((rawOption) => rawOption.id === Number(evt.target.value)) || initialRaw,
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
      size="2xl"
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
            <FormControl isInvalid={isTextEmpty(productInputValues.code)}>
              <FormLabel htmlFor="code">Code</FormLabel>
              <Input id="code" name="code" type="text" value={productInputValues.code} ref={initialRef} onChange={handleProductInputChanges} isRequired />
              <FormErrorMessage>Code is required.</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={isTextEmpty(productInputValues.name)}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" type="text" value={productInputValues.name} onChange={handleProductInputChanges} isRequired />
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input id="description" name="description" type="text" value={productInputValues.description} onChange={handleProductInputChanges} />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="image">Image</FormLabel>
              <Input id="image" name="image" type="text" value={productInputValues.image} onChange={handleProductInputChanges} />
            </FormControl>

            <Stack direction="row">
              <FormLabel htmlFor="type">Raws</FormLabel>
              <Button size="sm" onClick={handleAddProductRaw}>
                <Icon as={BsPlus} fontSize="md" />
              </Button>
            </Stack>

            <Stack spacing="4">
              {
                productInputValues.raws.map((productRaw: ProductRaw, idx: number) => (

                  <Stack key={productRaw.id}>
                    <Stack direction="row" align="center">
                      <FormControl>
                        <Select placeholder="Select raw by code" onChange={handleSelectProductRawChanges(idx)} isRequired>
                          {rawSelectOptions.map((rawOption: Raw) => (
                            <option key={rawOption.id} value={rawOption.id}>
                              {rawOption.code}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl isInvalid={isNumberInvalid(productRaw.quantity)} w="md">
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          placeholder="Insert quantity"
                          value={productRaw.quantity}
                          onChange={handleProductRawInputChanges(idx)}
                          isRequired
                        />
                      </FormControl>
                      <FormControl w="xs">
                        <Select name="unit" onChange={handleProductRawInputChanges(idx)} isRequired>
                          <option value="g">g</option>
                          <option value="kg">kg</option>
                          <option value="un">un</option>
                        </Select>
                      </FormControl>
                      <Button size="sm" onClick={() => handleDeleteProductRaw(idx)}>
                        <Icon as={BiTrashAlt} fontSize="md" />
                      </Button>
                    </Stack>
                  </Stack>
                ))
              }
            </Stack>
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
