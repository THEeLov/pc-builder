import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { GpuSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "@/Pages/Dashboard/DialogContext"

type FormFields = z.infer<typeof GpuSchema>

const GpuCreateDialog = () => {
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(GpuSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
        console.log(data)
    }

    return (
        <Card
            title="Create GPU"
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
                            name="memory"
                            register={register}
                            type="number"
                            placeholder="memory"
                            error={errors.memory}
                        />
                        <FormField
                            name="powerConnector"
                            register={register}
                            type="string"
                            placeholder="power connecter"
                            error={errors.powerConnector}
                        />
                        <FormField
                            name="interface"
                            register={register}
                            type="text"
                            placeholder="interface"
                            error={errors.interface}
                        />
                        <FormField
                            name="power"
                            register={register}
                            type="number"
                            placeholder="power"
                            error={errors.power}
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create GPU
                </button>
            </form>
        </Card>
    )
}

export default GpuCreateDialog
