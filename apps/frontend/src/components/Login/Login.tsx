import { error } from "console"
import "./login.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  username: z.string(),
  password: z.string(),
})

type FormFields = z.infer<typeof schema>

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({})

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // TODO not complete have to check if user is in the database
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
        <h1 className="login__headline">Log in</h1>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username")}
            className="form-input"
            type="text"
            placeholder="username"
          />
          <input
            {...register("password")}
            className="form-input"
            type="text"
            placeholder="password"
          />
          <button className="form-button" type="submit">Log In</button>

          {/* Show error if user doesnt exit */}
          {errors.root && <div>{errors.root.message}</div>}
        </form>
      </div>
    </div>
  )
}

export default Login
