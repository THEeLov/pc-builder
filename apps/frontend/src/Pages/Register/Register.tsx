import "./register.css"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import Bob from "../../images/sign_UP_bob.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validation"
import { Link, useNavigate } from "react-router-dom"
import { useRegister } from "@/hooks/useAuth"
import useAuth from "@/auth/authProvider"

type FormFields = z.infer<typeof schema>

const Register = () => {
    const { mutateAsync: RegisterMutation } = useRegister()
    const { login } = useAuth()
    const navigate = useNavigate()

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
            const response = await RegisterMutation(data)
            login(response)
            navigate("/")
        } catch (error) {
            setError("root", {
                message: "Something went wrong.",
            })
        }
    }

    return (
        <div className="register">
            <div className="register__logo">
                <Link to="/" className="register__logo__link">
                    <h1>PC Builder</h1>
                </Link>
            </div>
            <div className="register__container">
                <div className="register__form-container">
                    <h1 className="register__form-container__headline">Sign Up</h1>
                    <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("username")} className="form-input" type="text" placeholder="username" />
                        {errors.username && <div className="error-message">{errors.username.message}</div>}

                        <input {...register("email")} className="form-input" type="email" placeholder="email" />
                        {errors.email && <div className="error-message">{errors.email.message}</div>}

                        <input
                            {...register("password")}
                            className="form-input"
                            type="password"
                            placeholder="password"
                        />
                        {errors.password && <div className="error-message">{errors.password.message}</div>}

                        <input
                            {...register("confirmPassword")}
                            className="form-input"
                            type="password"
                            placeholder="confirm password"
                        />
                        {errors.confirmPassword && (
                            <div className="error-message">{errors.confirmPassword.message}</div>
                        )}

                        <button className="form-button" type="submit">
                            Sign Up
                        </button>

                        {/* Show error if user doesnt exit */}
                        {errors.root && <div className="error-message">{errors.root.message}</div>}
                    </form>
                    <div className="register__form-container__questions">
                        <Link to="/login">Already have an accout ? Sign In</Link>
                    </div>

                    <div className="register-image">
                        <img className="register-bob" src={Bob} alt="not working" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
