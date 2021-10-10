import React from "react";
import Select from "react-select";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    borderRadius: "5px",
    height: state.selectProps.height,
    width: state.selectProps.width,
  }),
  valueContainer: (base, state) => ({
    ...base,
    height: state.selectProps.height,
    width: state.selectProps.width,
  }),
  control: (base, state) => ({
    ...base,
    height: state.selectProps.height,
    fontWeight: "bold",
    background: state.selectProps.backgroundColor,
    color: "white",
    borderRadius: "5px",
    overflow: "hidden",
    pointerEvents: "auto",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "5px",
    hyphens: "auto",
    marginTop: "0",
    textAlign: "left",
    color: "black",
    overflowY: "auto",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: "bold",
    fontSize: "13px",
    color: state.selectProps.textColor,
  }),
  placeholder: (defaultStyles, state) => ({
    ...defaultStyles,
    fontWeight: "bold",
    fontSize: "13px",
    color: state.selectProps.textColor, //
  }),
  menuList: (base) => ({
    ...base,
    background: "whitesmoke",
    borderRadius: "5px",
    padding: 0,
  }),
  option: (provided) => ({
    ...provided,
    borderRadius: "5px",
    fontSize: '13px',
  }),
};

const ReactSelect = (props) => {
  return (
    <div>
      <Select
        placeholder={props.placeholder}
        value={props.value}
        styles={customStyles}
        height={props.height}
        width={props.width}
        backgroundColor={props.backgroundColor}
        options={props.options}
        onChange={(e) => props.onChange(e)}
        textColor={props.textColor}
        isClearable={true}
      />{" "}
    </div>
  );
};

export default ReactSelect;