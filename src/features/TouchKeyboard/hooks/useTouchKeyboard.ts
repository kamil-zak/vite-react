import { useState, useCallback, useEffect } from 'react';
import { ObjectSchema } from 'yup';

interface IUseTouchKeyboardConfig {
  schema: ObjectSchema<Record<string, string | undefined>>;
}

export const useTouchKeyboard = <T extends string>({ schema }: IUseTouchKeyboardConfig) => {
  const [values, setValues] = useState<Partial<Record<T, string>>>({});
  const [cursor, setCursor] = useState(0);
  const [activeInput, setActiveInput] = useState<T | null>(null);
  const [isValid, setIsValid] = useState(schema.isValidSync(values));

  useEffect(() => {
    setIsValid(schema.isValidSync(values));
  }, [values, schema]);

  const setInputFocus = useCallback((inputName: T, cursorPos: number) => {
    setCursor(cursorPos);
    setActiveInput(inputName);
  }, []);

  const register = useCallback(
    (inputName: T) => {
      if (!activeInput) setActiveInput((prev) => prev || inputName);
      return {
        value: values[inputName] || ('' as string),
        cursor: activeInput === inputName ? cursor : null,
        onCursorChange: (cursorPos: number) => setInputFocus(inputName, cursorPos),
      };
    },
    [values, activeInput, cursor, setInputFocus],
  );

  const onKeyPress = useCallback(
    (key: string) => {
      if (!activeInput) return;
      setValues((prev) => {
        const value = (prev[activeInput] || '') as string;
        const chars = [...value];
        if (key === '<') {
          if (cursor === 0) return prev;
          chars.splice(cursor - 1, 1);
          setCursor((x) => x - 1);
        } else {
          chars.splice(cursor, 0, key);
          setCursor((x) => x + key.length);
        }

        return { ...prev, [activeInput]: chars.join('') };
      });
    },
    [activeInput, cursor],
  );

  const keyboardProps = { onKeyPress };

  return { register, keyboardProps, values, isValid };
};
