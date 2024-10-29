import { useState } from "react";

export const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="relative inline-block w-[100px] h-[50px] cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div
        className={`absolute w-full h-full rounded-full transition-all duration-300 border-4 ${
          isChecked ? "bg-gray-300 border-gray-900" : "bg-gray-900 border-gray-900"
        }`}
      ></div>
      <div
        className={`absolute top-[25%] left-[12px] w-[25px] h-[25px] rounded-full transition-all duration-300 transform ${
          isChecked
            ? "translate-x-[50px] bg-gray-900"
            : "translate-x-0 bg-gray-900"
        }`}
        style={{
          boxShadow: isChecked
            ? "none" // Sin sombra cuando está activado
            : "inset 12px -4px 0px 0px rgb(216, 219, 224)", // Sombra interna visible cuando está desactivado
        }}
      ></div>
    </label>
  );
};

