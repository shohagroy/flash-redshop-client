"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
// import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  disabled,
  label,
  required,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="flex">
      <div className="flex">
        {required ? (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        ) : null}
        <p className="w-[150px]">{label ? label : null}:</p>
      </div>
      <div className="w-full">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              className="px-2 py-1 bg-gray-100 ml-4 border border-black rounded-md"
              disabled={disabled}
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )}
        />
        <p>
          <small style={{ color: "red" }}>{errorMessage}</small>
        </p>
      </div>
    </div>
  );
};

export default FormInput;
