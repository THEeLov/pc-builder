import { Card } from "antd"
import { useForm, SubmitHandler } from "react-hook-form"
import { RamSchema } from "../../validationSchemas/dialogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "@/hooks/useComponents"
import { showSuccessNotification } from "@/utils/showNotfication"
import "./dialog.css"

type FormFields = z.infer<typeof RamSchema>

const RamCreateDialog = () => {
    const { mutateAsync: CreateRam } = useComponentsCreate("rams")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(RamSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "RAM")
        formData.append("image", data.image[0])
        formData.append("computerType", data.computerType)
        formData.append("memoryType", data.memoryType)
        formData.append("capacity", data.capacity.toString())

        console.log(formData)
        try {
            await CreateRam(formData)
            showSuccessNotification("RAM created successfully")
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
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
                <button type="submit" className="form-button">
                    Create RAM
                </button>
            </form>
        </Card>
    )
}

export default RamCreateDialog
