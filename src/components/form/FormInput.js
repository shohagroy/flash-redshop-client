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
    <>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}:
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
        {" "}
        <small style={{ color: "red" }}>{errorMessage}</small>
      </p>
    </>
  );
};

export default FormInput;
