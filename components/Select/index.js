import Select from "react-select";

const SelectInput = ({
  options,
  value,
  placeholder,
  padding,
  width,
  smallFont,
  error,
  onChange,
  className,
  textColor,
}) => {
  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        className={`mt-2 ${
          width ? width : "w-56"
        } outline-primary-color !shadow-none ${
          smallFont ? "text-sm" : "text-base"
        } ${className ? className : ""}`}
        placeholder={placeholder}
        classNamePrefix="react-select"
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base) => ({
            ...base,
            boxShadow: "none",
            border: error ? "1px solid #b91c1c" : "1px solid #CBD5E1",
            "&:focus-within": {
              boxShadow: "0 0 0px 1.7px #e96a3a",
              border: "none",
            },
            "&:hover": {
              border: error ? "1px solid #b91c1c" : "1px solid #CBD5E1",
            },
            padding: padding ? padding : "0",
          }),

          singleValue: (base) => ({
            ...base,
            color: textColor ? textColor : base?.color,
          }),

          placeholder: (provided) => ({
            ...provided,
            color: "#B0B0B0",
            margin: "0px",
            padding: "0px",
          }),

          dropdownIndicator: (provided) => ({
            ...provided,
            padding: "0px",
          }),
        }}
      />
      {error && <p className="text-xs mt-1 text-red-700 w-full">{error}</p>}
    </>
  );
};

export default SelectInput;
