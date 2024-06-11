import React from "react"

// Any types should be changed
interface FormFieldProps {
    name: string
    register: any
    type: string
    placeholder: string
    error: any
}

const FormField: React.FC<FormFieldProps> = ({ name, register, type, placeholder, error }) => {
    return (
        <>
            <input {...register(name)} type={type} placeholder={placeholder} className="form-input" />
            {error && <div className="error-message">{error.message}</div>}
        </>
    )
}

export default FormField
