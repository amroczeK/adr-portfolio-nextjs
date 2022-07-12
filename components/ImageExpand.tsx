import { FC } from "react";
import Modal from "./Modal";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
};

const ImageExpand: FC<ImageProps> = ({ src, alt, title }) => {
  return (
    <>
      <Modal>
        <img src={src} alt={alt} title={title} />
      </Modal>
    </>
  );
};

export default ImageExpand;
