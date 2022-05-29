import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

interface CardTitle {
  name: string
  value: number
  unit: string
}
interface CardData {
  name: string
  value: number
  unit: string
}
interface OEECardProps {
  title: CardTitle
  data: Array<CardData>
  color: string
}
export default function OEECard({ title, data, color }: OEECardProps) {
  return (
    <Stack
      maxWidth="md"
      borderWidth="1px"
      borderRadius="lg"
      padding="4"
    >
      <Stack
        direction="row"
        justify="space-between"
        spacing="12"
        fontSize="md"
        fontWeight="700"
        color={color}
      >
        <Text>{title.name}</Text>
        <Text>
          {title.value}
          &ensp;
          {title.unit}
        </Text>
      </Stack>
      {
        data.map((row) => (
          <Stack
            direction="row"
            justify="space-between"
            spacing="12"
          >
            <Text>{row.name}</Text>
            <Text>
              {row.value}
              &ensp;
              {row.unit}
            </Text>
          </Stack>
        ))
      }
    </Stack>
  );
}
