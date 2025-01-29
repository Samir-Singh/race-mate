const InputBox = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  error,
  maxLength,
  onKeyDown,
}) => {
  return (
    <>
      <input
        maxLength={maxLength}
        type={type}
        value={value}
        onChange={onChange}
        className={`p-3 mt-2 border border-slate-300 outline-primary-color rounded ${className} ${
          error ? "!border-red-700" : ""
        }`}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />
      {error && <p className="text-xs mt-1 text-red-700 w-full">{error}</p>}
    </>
  );
};

export default InputBox;
