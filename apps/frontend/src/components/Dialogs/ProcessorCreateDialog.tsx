import { Card } from "antd"
import "./dialog.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { ProcessorSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "../FormField"
import BaseForm from "../BaseForm"
import { useDialog } from "../../hooks/useDialog"
import { useComponentsCreate } from "@/hooks/useComponents"

type FormFields = z.infer<typeof ProcessorSchema>

const ProcessorCreateDialog = () => {
    const { mutateAsync: CreateProcessor } = useComponentsCreate("processors")
    const { closeDialog } = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>({
        resolver: zodResolver(ProcessorSchema),
    })

    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
        const formData = new FormData()

        formData.append("component[name]", data.component.name)
        formData.append("component[price]", data.component.price.toString())
        formData.append("component[manufacturer]", data.component.manufacturer)
        formData.append("component[componentType]", "PROCESSOR")
        formData.append("image", data.image[0])
        formData.append("architecture", data.architecture)
        formData.append("cores", data.cores.toString())
        formData.append("threads", data.threads.toString())
        formData.append("bits", data.bits.toString())
        formData.append("socket", data.socket)

        console.log(formData)
        try {
            await CreateProcessor(formData)
            closeDialog()
        } catch (err) {
            // ignored for now maybe forever who knows
        }
    }

    return (
        <Card
            title="Create Processor"
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
                            name="architecture"
                            register={register}
                            type="text"
                            placeholder="architecture"
                            error={errors.architecture}
                        />
                        <FormField
                            name="cores"
                            register={register}
                            type="number"
                            placeholder="cores"
                            error={errors.cores}
                        />
                        <FormField
                            name="threads"
                            register={register}
                            type="number"
                            placeholder="threads"
                            error={errors.threads}
                        />
                        <FormField
                            name="bits"
                            register={register}
                            type="number"
                            placeholder="bits"
                            error={errors.bits}
                        />
                        <FormField
                            name="socket"
                            register={register}
                            type="text"
                            placeholder="socket"
                            error={errors.socket}
                        />
                    </div>
                </div>
                <button type="submit" className="form-button">
                    Create Processor
                </button>
            </form>
        </Card>
    )
}

export default ProcessorCreateDialog
