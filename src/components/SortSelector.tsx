import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlastforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average ready" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
