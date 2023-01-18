import styles from "./SearchButton.module.scss";

const SearchButton = ({
  as: SearchBtn = "div",
  children,
  variant,
  placeHolder = "Search",
  label = "",
  active,
  icon,
  value,
  onChange,
  onClick,
}) => {
  return (
    <>
      <SearchBtn className={`${styles.search_btn} ${styles[variant]}`}>
        <span onClick={onClick}>{icon}</span>
        <label>
          <input
            className={`${styles.input} ${active ? styles.is_open : ""}`}
            placeholder={placeHolder}
            onChange={onChange}
            value={value}
          ></input>
        </label>

        {children}
      </SearchBtn>
      <p>{value}</p>
    </>
  );
};

export default SearchButton;
