import "./main.css"

import CustomButton from "../../../components/CustomButton/CustomButton"
import { ToolOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <main className="main">
            <div className="main-content">
                <h1>Build Your PC</h1>
                <p>
                    Select from the best components, fine-tune your specs, and create a PC that's uniquely yours. No
                    compromises, just pure performance. Our intuitive process makes building your ultimate machine
                    simple and enjoyable.
                </p>
                <div className="main-button">
                    <Link to="/build">
                        <CustomButton label="Lets start" icon={<ToolOutlined />} btype="primary" />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Main
