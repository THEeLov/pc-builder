import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { MotherboardSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FieldError } from "react-hook-form"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "@/Pages/Dashboard/DialogContext"

type FormFields = z.infer<typeof MotherboardSchema>

const MotherboardCreateDialog = () => {
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(MotherboardSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
        console.log(data)
    }

    return (
        <Card
            title="Create Motherboard"
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
                            name="socket"
                            register={register}
                            type="text"
                            placeholder="socket"
                            error={errors.socket}
                        />
                        <FormField
                            name="formFactor"
                            register={register}
                            type="text"
                            placeholder="form factor"
                            error={errors.formFactor}
                        />
                        <FormField
                            name="ramSlots"
                            register={register}
                            type="number"
                            placeholder="ram slots"
                            error={errors.ramSlots}
                        />
                        <FormField
                            name="ramType"
                            register={register}
                            type="string"
                            placeholder="ram type"
                            error={errors.ramType}
                        />
                        <FormField
                            name="gpuInterface"
                            register={register}
                            type="string"
                            placeholder="gpu interface"
                            error={errors.gpuInterface}
                        />
                        <FormField
                            name="storageBusType"
                            register={register}
                            type="string"
                            placeholder="storage bus type"
                            error={errors.storageBusType}
                        />
                    </div>
                </div>
                <button type="submit">Create Motherbaord</button>
            </form>
        </Card>
    )
}

export default MotherboardCreateDialog
