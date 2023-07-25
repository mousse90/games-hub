import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <div>
      <Badge
        colorScheme={color}
        borderRadius="5px"
        fontSize="14px"
        paddingX={2}
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
