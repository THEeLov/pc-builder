import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { PcCaseSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "@/Pages/Dashboard/DialogContext"

type FormFields = z.infer<typeof PcCaseSchema>

const PcCaseCreateDialog = () => {
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(PcCaseSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
        console.log(data)
    }

    return (
        <Card
            title="Create Pc-Case"
            style={{ width: "fit-content" }}
            extra={
                <div onClick={closeDialog} className="dialog__close-button">
                    <b>X</b>
                </div>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="dialog-form">
                    <BaseForm register={register} errors={errors} />
                    <div className="dialog-form__grid--second">
                        <FormField
                            name="formFactor"
                            register={register}
                            type="text"
                            placeholder="form factor"
                            error={errors.formFactor}
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Pc-Case
                </button>
            </form>
        </Card>
    )
}

export default PcCaseCreateDialog
