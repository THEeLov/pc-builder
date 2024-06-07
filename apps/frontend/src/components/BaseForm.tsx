import React from "react"
import FormField from "./FormField"

const BaseForm: React.FC<any> = ({ register, errors }) => {
    return (
        <div className="dialog-form__grid--first">
            <FormField
                name="component.name"
                register={register}
                type="text"
                placeholder="name"
                error={errors?.component?.name}
            />
            <FormField
                name="component.price"
                register={register}
                type="number"
                placeholder="price"
                error={errors?.component?.price}
            />
            <FormField
                name="component.manufacturer"
                register={register}
                type="string"
                placeholder="manufacturer"
                error={errors?.component?.manufacturer}
            />
            <FormField
                name="component.imageUrl"
                register={register}
                type="file"
                placeholder="image"
                error={errors?.component?.imageUrl}
            />
        </div>
    )
}

export default BaseForm
