import styles from "./AddProduct.module.css";

function Input({
  type = "text",
  placeholder = "",
  name,
  label="",
  register,
  validation,
  errors,
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>
        {label}{" "}
        {errors[name] && (
          <p className={styles.error}>{errors[name]?.message}</p>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        autoComplete="off"
        {...register(name, validation)}
      />
    </div>
  );
}

export default Input;
