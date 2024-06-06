import React, { createContext, useContext, useState } from "react"

interface DialogContextType {
    isDialogOpen: boolean
    openDialog: () => void
    closeDialog: () => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const openDialog = () => {
        setIsDialogOpen(true)
    }

    const closeDialog = () => {
        setIsDialogOpen(false)
    }

    return <DialogContext.Provider value={{ isDialogOpen, openDialog, closeDialog }}>{children}</DialogContext.Provider>
}

export const useDialog = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error("useDialog must be used within a DialogProvider")
    }
    return context
}
