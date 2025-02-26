import { useFormik } from "formik";
import { HomePageWrapper, UserForm, UserFormName } from "./styles";

//  form - interface /
interface UserFormValues {
  firstlastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
}

function Home() {
  /*Regex- использовать например- const-error и if 
  и если ввод неверный, появляется сообщение красным цветом!
   Имя – только буквы, пробелы и дефисы.
   Email - корректный формат example@mail.com.
   Номер телефона - только цифры, минимум 10 символов.
   Пароль - минимум 8 символов, 1 буква, 1 цифра, 1 спецсимвол.
   Подтверждение пароля - совпадает ли с паролем.*/

  // Initialize formik -useFormik, with form values and submit handler / 
  const formik = useFormik<UserFormValues>({
    initialValues: {
      firstlastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>

        {/* Input for First/Last Name */}
        <label>
          First/Last name
          <input
            type="text"
            name="firstlastName"
            placeholder="Enter your fullname"
            value={formik.values.firstlastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {/* Input for Email  */}
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {/* Input for Phone Number */}
        <label>
          Phone number
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {/* Input for Password */}
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {/* Input for Confirm Password */}
        <label>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>

        {/* Dropdown for Role Selection  */}
        <label>
          Select your role
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>Select your role</option>
            <option value="Подрядчик">Подрядчик</option>
            <option value="Заместитель директора">Заместитель директора</option>
            <option value="Руководитель проекта">Руководитель проекта</option>
            <option value="Начальник участка">Начальник участка</option>
            <option value="Старший прораб">Старший прораб</option>
            <option value="Прораб">Прораб</option>
            <option value="Мастер">Мастер</option>
            <option value="Бригадир">Бригадир</option>
            <option value="Исполнитель">Исполнитель</option>
          </select>
        </label>

        {/* Submit Button  */}
        <button type="submit">Create</button>
      </UserForm>
    </HomePageWrapper>
  );
}

export default Home;
