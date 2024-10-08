import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface SkinCardProps {
  name: string;
  image: string;
  price: number;
  float?: string;
  category: string;
}

const SkinCard: React.FC<SkinCardProps> = ({
  name,
  image,
  price,
  float,
  category,
}) => {
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    setImageSrc("/image_unavailable.png");
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageSrc} alt={name} onError={handleImageError} />
      <Text fontWeight="bold" mt={2}>
        {name}
      </Text>
      <Text>Category: {category}</Text>
      <Text>Price: ${price.toFixed(2)}</Text>
      {float && <Text>Float: {float}</Text>}
    </Box>
  );
};

export default SkinCard;
