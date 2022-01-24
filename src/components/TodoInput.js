export default function TodoInput({placeholder, onChange, value}) {
  return (
    <>
      <input
        type="text"
        className="add-input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
