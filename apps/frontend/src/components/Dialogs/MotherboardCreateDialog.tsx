import { Card } from "antd"
import "./dialog.css"

const MotherboardCreateDialog = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <Card
            title="Create Processor"
            style={{ width: "fit-content" }}
            extra={
                <div onClick={handleClose} className="dialog__close-button">
                    <b>X</b>
                </div>
            }
        >
            <form></form>
        </Card>
    )
}

export default MotherboardCreateDialog
