import { useFormik } from "formik";
import { HomePageWrapper, UserForm, UserFormName } from "./styles";

interface UserFormValues {
  firstlastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
}

function Home() {
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

        <button type="submit">Create</button>
      </UserForm>
    </HomePageWrapper>
  );
}

export default Home;
