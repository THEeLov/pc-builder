import "./main.css"

import CustomButton from "../../../components/CustomButton/CustomButton"
import { ToolOutlined } from "@ant-design/icons"

const Main = () => {
  return (
    <main className="main">
      <div className="main-content">
        <h1>Build Your PC</h1>
        <p>
          Select from the best components, fine-tune your specs, and create a PC
          that's uniquely yours. No compromises, just pure performance. Our
          intuitive process makes building your ultimate machine simple and
          enjoyable.
        </p>
        <div className="main-button">
          <CustomButton
            label="Lets start"
            icon={<ToolOutlined />}
            btype="primary"
          />
        </div>
      </div>
    </main>
  )
}

export default Main
