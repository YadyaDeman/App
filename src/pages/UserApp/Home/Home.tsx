import { useFormik } from "formik";
import { HomePageWrapper, UserForm, UserFormName } from "./styles";

// Form interface to define the structure of the form values
interface UserFormValues {
  firstlastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
}

function Home() {
  // Validation function for the form inputs
  const validate = (values: UserFormValues) => {
    const errors: Partial<UserFormValues> = {};

    // Regex - name
    const nameRegex = /^[A-Za-z\s-]+$/;
    if (!values.firstlastName) {
      errors.firstlastName = "Enter your fullname";
    } else if (!nameRegex.test(values.firstlastName)) {
      errors.firstlastName = "Only letters, spaces, and hyphens allowed";
    }

    // Regex - email format
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Regex - validating phone number
    const phoneRegex = /^\d{7,}$/;
    if (!values.phoneNumber) {
      errors.phoneNumber = "Enter your phone number";
    } else if (!phoneRegex.test(values.phoneNumber)) {
      errors.phoneNumber = "Only numbers allowed, minimum 7 digits";
    }

    // Regex - password validation)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.password) {
      errors.password = "Enter your password";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character";
    }

    // confirming password match
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // role selection
    if (!values.role) {
      errors.role = "Select your role";
    }

    return errors;
  };

  // formik - values, validation
  const formik = useFormik<UserFormValues>({
    initialValues: {
      firstlastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>

        {/* form fields dynamically */}
        {[
          { label: "First/Last name", name: "firstlastName", type: "text", placeholder: "Enter your fullname" },
          { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
          { label: "Phone number", name: "phoneNumber", type: "tel", placeholder: "Enter your phone number" },
          { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
          { label: "Confirm password", name: "confirmPassword", type: "password", placeholder: "Confirm your password" },
        ].map(({ label, name, type, placeholder }) => (
          <label key={name}>
            {label}
            <input type={type} name={name} placeholder={placeholder} value={formik.values[name as keyof UserFormValues]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* validation error messages */}
            {formik.touched[name as keyof UserFormValues] && formik.errors[name as keyof UserFormValues] && (
              <p style={{ color: "red" }}>{formik.errors[name as keyof UserFormValues]}</p>
            )}
          </label>
        ))}

        {/* Dropdown for selecting user role */}
        <label>
          Select your role
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>Select your role</option>
            {["Подрядчик", "Заместитель директора", "Руководитель проекта", "Начальник участка", "Старший прораб", "Прораб", "Мастер", "Бригадир", "Исполнитель"].map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          {/* validation error message for role */}
          {formik.touched.role && formik.errors.role && (
            <p style={{ color: "red" }}>{formik.errors.role}</p>
          )}
        </label>

        {/* Submit button */}
        <button type="submit">Create</button>
      </UserForm>
    </HomePageWrapper>
  );
}

export default Home;
