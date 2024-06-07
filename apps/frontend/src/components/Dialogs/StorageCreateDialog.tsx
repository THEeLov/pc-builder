import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { StorageSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "@/Pages/Dashboard/DialogContext"

type FormFields = z.infer<typeof StorageSchema>

const StorageCreateDialog = () => {
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(StorageSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
        console.log(data)
    }

    return (
        <Card
            title="Create Storage"
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
                            name="storageType"
                            register={register}
                            type="string"
                            placeholder="storage type"
                            error={errors.storageType}
                        />
                        <FormField
                            name="capacity"
                            register={register}
                            type="number"
                            placeholder="efficiency"
                            error={errors.capacity}
                        />
                        <FormField
                            name="busType"
                            register={register}
                            type="string"
                            placeholder="form factor"
                            error={errors.busType}
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Storage
                </button>
            </form>
        </Card>
    )
}

export default StorageCreateDialog
