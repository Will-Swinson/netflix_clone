import { useState, useEffect, useContext, createContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

// Create a context
const MovieContext = createContext();

// Custom Hooks to use context
export function useMovies() {
  return useContext(MovieContext);
}

// Create a provider
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [signUpData, setSignUpData] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(4);

  const location = useLocation();
  const navigate = useNavigate();

  async function handleSignup(formInputs) {
    try {
      console.log(formInputs);
      const { email, password } = formInputs;

      const formData = {
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      };

      // Send Axios Post Request
      const response = await axios.post("/api/signup", formData);
      console.log(response);
      if (!response.data) {
        throw new Error("Something went wrong");
      }

      navigate("/signup3");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignIn(formInputs) {
    console.log(formInputs);
    const { email, password } = formInputs;

    const formData = {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    };
    // Send Axios Post Request
    const response = await axios.post("/api/login", formData);
    console.log(response.data);
  }

  // Yup Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(`Include "@", Invalid Email`)
      .required("Must Provide Email"),

    password: Yup.string()
      .required("Password Required")
      .min(8, "Must be 8 characters")
      .max(15, "Must be 15 characters"),
  });

  // Form Values
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Form Validation
    validationSchema,

    // Form Submission
    onSubmit: (values) => {
      if (location.pathname === "/signin") {
        handleSignIn(values);
        return;
      }

      handleSignup(values);
    },
  });

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        signUpData,
        setSignUpData,
        formik,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
