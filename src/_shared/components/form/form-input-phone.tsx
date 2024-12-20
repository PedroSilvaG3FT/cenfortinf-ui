import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/_core/components/fragments/form";
import PhoneInput from "react-phone-number-input";
import { Control, Controller } from "react-hook-form";

interface IAppFormInputPhoneProps {
  name: string;
  label?: string;
  control: Control<any>;
  containerClassName?: string;
  required?: boolean;
  placeholder?: string;
}

export default function AppFormInputPhone(props: IAppFormInputPhoneProps) {
  const { name, label, control, containerClassName, required, placeholder } =
    props;

  return (
    <FormField
      name={name}
      control={control}
      render={() => (
        <FormItem className={containerClassName || ""}>
          {label && (
            <FormLabel>
              {required && <span className="text-red-400 mr-0.5">*</span>}
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Controller
              name={name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  international
                  onChange={onChange}
                  placeholder={placeholder}
                  defaultCountry="BR"
                />
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
