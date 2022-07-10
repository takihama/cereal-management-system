import {
  Button, Icon, Input, InputGroup, InputRightAddon, Stack, Text,
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
  search: HeaderSearch | null
  buttons: Array<HeaderButtons>
}

export default function Header({
  title, icon, search = null, buttons = [],
}: HeaderProps) {
  return (
    <Stack
      height="50px"
      direction="row"
      justifyContent="space-between"
      background="white"
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
        {search && (
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
        )}
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
