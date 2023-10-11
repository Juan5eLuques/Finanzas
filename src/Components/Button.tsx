import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Button: FC = () => {
  return (
    <div className="bg-red-800">
      <button className="w-10 h-20">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
