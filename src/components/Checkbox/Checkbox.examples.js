export const CheckboxExamples = `import {Checkbox} from "@hygge-ui/components/Button;

  export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
      />
              `;
