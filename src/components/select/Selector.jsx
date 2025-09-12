import { Select } from "antd";
import { Placeholders, SelectOptions } from "../../assets/labels/labels.jsx";

const Selector = () => {
  return (
    <Select
      showSearch
      placeholder={
        <span className="custom-placeholder text-black text-lg font-normal">
          {Placeholders.Trainer}
        </span>
      }
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={SelectOptions}
      className="custom-select  [&_.ant-select-selector]:!border-0 
        [&_.ant-select-selector]:!shadow-none
         [&_.ant-select-selection-item]:text-black 
         [&_.ant-select-selection-item]:text-lg 
         [&_.ant-select-selection-item]:font-semibold"
    />
  );
};

export default Selector;
