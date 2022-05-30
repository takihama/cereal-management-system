import React, { useRef } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, InputGroup, InputRightAddon,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { BiImport } from 'react-icons/bi';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';

interface ImportProductsModalProps {
  onImportProducts: () => void
  isOpen: boolean
  onClose: () => void
}
export default function ImportProductionsModal({
  onImportProducts, isOpen, onClose,
}: ImportProductsModalProps) {
  const handleOnImport = () => {
    onImportProducts();
    console.log('onImport');
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
            <Icon as={BiImport} />
            <Text>Import Production Orders</Text>
          </Stack>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="file">File</FormLabel>
            <InputGroup>
              <Input id="file" name="file" type="text" placeholder="Select a .csv file" ref={initialRef} />
              <InputRightAddon
                bg="primary.100"
                _hover={{
                  bg: 'primary.300',
                }}
              >
                <Icon as={BsFileEarmarkSpreadsheet} />
              </InputRightAddon>
            </InputGroup>
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
              onClick={handleOnImport}
            >
              Import
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
