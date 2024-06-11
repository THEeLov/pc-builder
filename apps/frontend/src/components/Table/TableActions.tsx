import React from 'react'
import { FaEye } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { TiPlus } from 'react-icons/ti'
import { mapComponentToBody } from '@/utils/mapComponentToBody'
import { Component } from '@/models/components'
import useAuthData from '@/hooks/useAuthData'
import { useNavigate } from 'react-router-dom'
import { useComponentsDelete } from '@/hooks/useComponents'
import { usePartialConfigEdit } from '@/hooks/usePartialConfig'
import CustomButton from '../CustomButton/CustomButton'

interface TableActionsProps {
    record: Component
    admin: boolean
    name: string
    setOpenView: React.Dispatch<React.SetStateAction<boolean>>
    setComponentId: React.Dispatch<React.SetStateAction<string>>
}

const TableActions: React.FC<TableActionsProps> = ({ record, admin, name, setOpenView, setComponentId }) => {
    const { user } = useAuthData()
    const navigate = useNavigate()
    
    const { mutateAsync: DeleteComponent } = useComponentsDelete(record.component.id)
    const { mutateAsync: AddComponent } = usePartialConfigEdit(user?.id ?? "")

    const handleDelete = async () => {
        setComponentId(record.component.id)
        await DeleteComponent()
    }

    const handleAdd = async () => {
        setComponentId(record.id)
        const body = mapComponentToBody(name, record, false)
        await AddComponent(body)
        navigate("/build")
    }

    const handleView = () => {
        setComponentId(record.id)
        setOpenView(true)
    }

    return (
        <div className="table-buttons">
            <span onClick={handleView}>
                <CustomButton label="" btype="secondary" icon={<FaEye />} />
            </span>
            {admin ? (
                <span onClick={handleDelete}>
                    <CustomButton label="" btype="primary" icon={<MdDelete />} />
                </span>
            ) : (
                <div onClick={handleAdd}>
                    <CustomButton label="Add" btype="primary" icon={<TiPlus />} />
                </div>
            )}
        </div>
    )
}

export default TableActions