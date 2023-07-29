import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlastforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const SortSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlastforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevant</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Realease date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average ready</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
