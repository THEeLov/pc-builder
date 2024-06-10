import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { MotherboardSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "@/hooks/useComponents"

type FormFields = z.infer<typeof MotherboardSchema>

const MotherboardCreateDialog = () => {
    const { closeDialog } = useDialog()
    const { mutateAsync: CreateMotherboard } = useComponentsCreate("motherboards")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(MotherboardSchema),
    })

    // Looks like shit and i dont know how to make it cleaner
    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "MOTHERBOARD")
        formData.append("image", data.image[0])
        formData.append("socket", data.socket)
        formData.append("formFactor", data.formFactor)
        formData.append("ramSlots", data.ramSlots.toString())
        formData.append("ramType", data.ramType)
        formData.append("gpuInterface", data.gpuInterface)
        formData.append("storageBusType", data.storageBusType)

        console.log(formData)
        try {
            await CreateMotherboard(formData)
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
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
                <button type="submit" className="form-button">
                    Create Motherbaord
                </button>
            </form>
        </Card>
    )
}

export default MotherboardCreateDialog
