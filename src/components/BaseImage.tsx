import Image, { ImageProps } from "next/image";
import { BASE_PATH } from "@/utils/helper";

type BaseImageProps = Omit<ImageProps, 'src'> & {
  src: string;
};

/**
 * Custom Image component that automatically adds basePath for subdirectory deployment.
 * Use this instead of next/image for all images.
 */
const BaseImage = ({ src, alt, ...props }: BaseImageProps) => {
  // Add basePath to src if it starts with /
  const imageSrc = src.startsWith('/') ? `${BASE_PATH}${src}` : src;

  return <Image {...props} src={imageSrc} alt={alt} />;
};

export default BaseImage;
