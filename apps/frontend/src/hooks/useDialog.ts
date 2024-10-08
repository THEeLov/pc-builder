import { DialogContext } from "@/providers/DialogProvider"
import { useContext } from "react"

export const useDialog = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error("useDialog must be used within a DialogProvider")
    }
    return context
}
