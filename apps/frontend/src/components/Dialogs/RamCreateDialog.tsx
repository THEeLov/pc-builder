import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { RamSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "@/Pages/Dashboard/DialogContext"

type FormFields = z.infer<typeof RamSchema>

const RamCreateDialog = () => {
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(RamSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
        console.log(data)
    }

    return (
        <Card
            title="Create RAM"
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
                            name="computerType"
                            register={register}
                            type="text"
                            placeholder="computer type"
                            error={errors.computerType}
                        />
                        <FormField
                            name="memoryType"
                            register={register}
                            type="text"
                            placeholder="memory type"
                            error={errors.memoryType}
                        />
                        <FormField
                            name="capacity"
                            register={register}
                            type="number"
                            placeholder="capacity"
                            error={errors.capacity}
                        />
                    </div>
                </div>
                <button type="submit">Create RAM</button>
            </form>
        </Card>
    )
}

export default RamCreateDialog
