import { FC, FormEvent, useState } from 'react';
import {
  RegisterFormBox,
  RegisterFormButton,
  RegisterFormInput,
  RegisterFormText,
  RegisterFormWrapper,
} from './register-form.styles';
import { registerDevice } from '../../api';

interface IRegisterFormProps {
  onRegister: (token: string) => void;
  campaignId: string;
}

export const RegisterForm: FC<IRegisterFormProps> = ({ onRegister, campaignId }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const isValid = name.length > 5;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid || loading) return;
    setLoading(true);
    registerDevice({ campaignId, name })
      .then(({ accessToken }) => {
        onRegister(accessToken);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <RegisterFormWrapper>
        <RegisterFormBox>
          <RegisterFormText>PODAJ NAZWĘ URZĄDZENIA:</RegisterFormText>
          <RegisterFormInput value={name} onChange={(e) => setName(e.target.value)} />
          <RegisterFormButton disabled={!isValid || loading}>REJESTRUJ</RegisterFormButton>
        </RegisterFormBox>
      </RegisterFormWrapper>
    </form>
  );
};
