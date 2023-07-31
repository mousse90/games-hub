import React from "react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";
import { ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommanded", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "35px" },
  };
  return (
    <div>
      <Image {...emojiMap[rating]} marginTop={1} />
    </div>
  );
};

export default Emoji;
