import {
  Button,
  Icon, Input, InputGroup, InputRightAddon, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { BiSearch } from 'react-icons/bi';

interface HeaderButtons {
  name: string
  icon?: IconType
  onClick: React.MouseEventHandler<Element>
}

interface HeaderSearch {
  name: string
  value: string
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

interface HeaderProps {
  title: string
  icon: IconType
  search: HeaderSearch
  buttons: Array<HeaderButtons>
}

export default function Header({
  title, icon, search, buttons,
}: HeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      background="gray.100"
    >
      <Stack
        direction="row"
        align="center"
        width="full"
        paddingX="4"
        paddingY="2"
        spacing="4"
      >
        <Icon fontSize="2xl" as={icon} />
        <Text>{title}</Text>
        <InputGroup maxWidth="xl">
          <Input
            name={search.name}
            value={search.value}
            placeholder={search.placeholder}
            onChange={search.onChange}
            bg="white"
            border="0"
          />
          <InputRightAddon
            bg="primary.100"
            _hover={{
              bg: 'primary.300',
            }}
          >
            <Icon as={BiSearch} />
          </InputRightAddon>
        </InputGroup>
      </Stack>
      <Stack
        direction="row"
        align="center"
        paddingX="4"
        paddingY="2"
        spacing="4"
      >
        {buttons.map((button) => (
          <Button
            key={button.name}
            bg="primary.100"
            _hover={{
              bg: 'primary.300',
            }}
            _focus={{ boxShadow: 'none' }}
            onClick={button.onClick}
          >
            <Stack
              direction="row"
              align="center"
            >
              {button.icon && (
                <Icon
                  fontSize="xñ"
                  as={button.icon}
                />
              )}
              <Text>{button.name}</Text>
            </Stack>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
