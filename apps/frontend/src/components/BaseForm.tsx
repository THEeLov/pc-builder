import React from "react"
import FormField from "./FormField"

const BaseForm: React.FC<any> = ({ register, errors }) => {
    return (
        <div className="dialog-form__grid--first">
            <FormField name="name" register={register} type="text" placeholder="name" error={errors.name} />
            <FormField name="price" register={register} type="number" placeholder="price" error={errors.price} />
            <FormField
                name="manufacturer"
                register={register}
                type="string"
                placeholder="manufacturer"
                error={errors.manufacturer}
            />
            <FormField name="imageUrl" register={register} type="file" placeholder="image" error={errors.imageUrl} />
        </div>
    )
}

export default BaseForm
