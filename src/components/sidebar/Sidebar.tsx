import React, { useState } from 'react';
import { NavLink as RouteLink } from 'react-router-dom';
import {
  Box, Icon, Link, Stack, Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiOutlineTool } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaBoxOpen } from 'react-icons/fa';
import { GiHamburgerMenu, GiWoodPile } from 'react-icons/gi';

interface LinkItemProps {
  name: string
  icon: IconType
  link: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: MdDashboard, link: '/dashboard' },
  { name: 'Production', icon: AiOutlineTool, link: '/productionOrders' },
  { name: 'Products', icon: FaBoxOpen, link: '/products' },
  { name: 'Raws', icon: GiWoodPile, link: '/rawmaterials' },
];

interface NavItemProps {
  name: string
  icon: IconType
  link: string
  navSize: string
}
export function NavItem({
  name, icon, link, navSize,
}: NavItemProps) {
  return (
    <Link
      as={RouteLink}
      to={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _activeLink={{
        bg: 'primary.500',
        color: 'white',
      }}
      borderBottom="1px"
      borderColor="gray.900"
    >
      <Stack
        direction="row"
        padding="4"
        align="center"
        cursor="pointer"
        _hover={{
          bg: 'primary.500',
          color: 'white',
        }}
      >
        <Icon fontSize="2xl" as={icon} />
        <Text paddingLeft="2" paddingRight="6" display={navSize === 'small' ? 'none' : 'flex'}>
          {name}
        </Text>
      </Stack>
    </Link>
  );
}

export function Sidebar() {
  const [navSize, setNavSize] = useState('large');

  const changeNavSize = () => {
    setNavSize(navSize === 'small' ? 'large' : 'small');
  };

  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="gray.200"
    >
      <Stack
        minH="80px"
        direction="row"
        align="center"
        padding="4"
      >
        <Icon
          onClick={changeNavSize}
          as={GiHamburgerMenu}
          fontSize="2xl"
          cursor="pointer"
        />
        <Text
          paddingLeft="2"
          fontSize="3xl"
          fontFamily="monospace"
          fontWeight="bold"
          display={navSize === 'small' ? 'none' : 'flex'}
        >
          Logo
        </Text>
      </Stack>
      <Stack align="justify" justify="center" spacing="0">
        {LinkItems.map(({ name, icon, link }) => (
          <NavItem key={name} icon={icon} name={name} link={link} navSize={navSize} />
        ))}
      </Stack>
    </Box>
  );
}
