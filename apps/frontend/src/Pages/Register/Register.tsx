import "./register.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import Bob from "../../images/sign_UP_bob.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validation"

type FormFields = z.infer<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (data.password != data.confirmPassword) {
      setError("root", { message: "Passwords are not matching" })
      return
    }

    try {
      console.log(data)
    } catch (error) {
      setError("root", {
        message: "Wrong username or password",
      })
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login__headline">Sign Up</h1>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username")}
            className="form-input"
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <div className="error-message">{errors.username.message}</div>
          )}

          <input
            {...register("email")}
            className="form-input"
            type="email"
            placeholder="email"
          />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}

          <input
            {...register("password")}
            className="form-input"
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <div className="error-message">{errors.password.message}</div>
          )}

          <input
            {...register("confirmPassword")}
            className="form-input"
            type="password"
            placeholder="confirm password"
          />
          {errors.confirmPassword && (
            <div className="error-message">
              {errors.confirmPassword.message}
            </div>
          )}

          <button className="form-button" type="submit">
            Sign Up
          </button>

          {/* Show error if user doesnt exit */}
          {errors.root && (
            <div className="error-message">{errors.root.message}</div>
          )}
        </form>
        <div className="login-questions">
          <a href="/login">Already have an accout ? Sign In</a>
        </div>

        <div className="register-image">
          <img className="register-bob" src={Bob} alt="not working" />
        </div>
      </div>
    </div>
  )
}

export default Register
