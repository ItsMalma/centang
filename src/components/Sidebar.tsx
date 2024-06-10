import { Stack } from "@mantine/core";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

export type SidebarItem = Omit<SidebarItemProps, "selected">;

export type SidebarProps = {
  items: SidebarItem[];
  selected: string;
};

export default function Sidebar({ items, selected }: SidebarProps) {
  return (
    <Stack gap="xl" bg="violet.8" c="white" p="lg" align="center">
      <Stack gap="xs">
        {items.map((item) => (
          <SidebarItem
            {...item}
            key={item.key}
            selected={item.key === selected}
          />
        ))}
      </Stack>
    </Stack>
  );
}
