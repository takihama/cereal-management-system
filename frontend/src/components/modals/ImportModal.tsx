import React, { useRef } from 'react';
import {
  Button, FormControl, FormLabel, Icon, Input, InputGroup, InputRightAddon,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { BiImport } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

interface ImportModalProps {
  title: string
  icon: IconType
  onImport: () => void
  isOpen: boolean
  onClose: () => void
}
export default function ImportModal({
  title, icon, onImport, isOpen, onClose,
}: ImportModalProps) {
  const handleOnImport = () => {
    onImport();
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
            <Text>{title}</Text>
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
                <Icon as={icon} />
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Stack
            direction="row"
            spacing="4"
          >
            <Button onClick={handleOnImport}>
              Import
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
