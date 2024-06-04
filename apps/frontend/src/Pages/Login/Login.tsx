import { error } from "console"
import "./login.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import Bob from "../../images/sign_up_bob.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validation"
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "@/hooks/useAuth"
import useAuth  from "../../auth/authProvider"

type FormFields = z.infer<typeof schema>

const Login = () => {
    const { mutateAsync: LoginMutation } = useLogin()
    const navigate = useNavigate()
    const { login } = useAuth()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            console.log(data)
            const response = await LoginMutation(data)
            login(response)
            navigate(`/${response.role === "ADMIN" ? "dashboard" : ""}`)
        } catch (error) {
            setError("root", {
                message: "Wrong username or password",
            })
        }
    }

    return (
        <div className="login">
            <div className="login__logo">
                <Link to="/" className="login__logo__link">
                    <h1>PC Builder</h1>
                </Link>
            </div>
            <div className="login__container">
                <div className="login__form-container">
                    <h1 className="login__form-container__headline">Sign in</h1>
                    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email")} className="form-input" type="text" placeholder="email" />
                        <input
                            {...register("password")}
                            className="form-input"
                            type="password"
                            placeholder="password"
                        />
                        <button className="form-button" type="submit">
                            Sign In
                        </button>

                        {/* Show error if user doesnt exit */}
                        {errors.root && <div className="error-message">{errors.root.message}</div>}
                    </form>
                    <div className="login__form-container__questions">
                        <Link to="/register">Dont have an account ? Sign Up</Link>
                    </div>

                    <div className="login-image">
                        <img className="bob" src={Bob} alt="not working" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
