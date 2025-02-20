import * as Yup from "yup";

const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_RULES = /^.{6,}$/;

export const validationSignIn = Yup.object({
  email: Yup.string()
    .email("Почта введена некорректно")
    .matches(EMAIL_REGEX, "Почта некорректна")
    .required("Обязательное поле"),

  password: Yup.string()
    .required("Обязательное поле")
    .matches(PASSWORD_RULES, "Пароль должен содержать минимум 6 символов"),
});
