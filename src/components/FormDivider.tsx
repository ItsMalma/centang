import { Divider, Text } from "@mantine/core";

export type FormDividerProps = {
  text: string;
};

export default function FormDivider({ text }: FormDividerProps) {
  return (
    <Divider
      color="violet.8"
      label={
        <Text fz="lg" fw="bold" c="violet.8">
          {text}
        </Text>
      }
      labelPosition="left"
    />
  );
}
