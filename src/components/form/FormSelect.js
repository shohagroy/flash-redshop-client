"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
// import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

const FormSelect = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  disabled,
  handleChange,
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
        <p className="w-[165px]">{label ? label : null}:</p>
      </div>
      <div className="w-full">
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <select
              onChange={handleChange ? handleChange : onChange}
              className="w-full border p-2 rounded-md border-black bg-gray-100"
              name={name}
            >
              <option value="admin">Admin</option>
              <option value="superAdmin">Super Admin</option>
            </select>
          )}
        />
        <p>
          <small style={{ color: "red" }}>{errorMessage}</small>
        </p>
      </div>
    </div>
  );
};

export default FormSelect;
