import { FC, useState } from "react";
import Modal from "./Modal";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
};

const ImageExpand: FC<ImageProps> = ({ src, alt, title }) => {
  let [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        onClick={modalHandler}
        className="group relative cursor-pointer overflow-hidden"
      >
        <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-5">
          <div className="flex justify-center items-center w-full h-full">
            <ArrowsExpandIcon className="h-24 w-24 text-gray-700 animate-ping" />
          </div>
        </div>
        <img src={src} alt={alt} title={title} />
      </div>
      <Modal isOpen={isOpen} modalHandler={modalHandler}>
        <img src={src} alt={alt} title={title} />
      </Modal>
    </>
  );
};

export default ImageExpand;
