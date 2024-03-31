import { Button, ConfigProvider } from "antd"
import { ReactNode } from "react"

type ButtonProps = {
  label: string
  btype: "primary" | "secondary" | "special"
  icon?: ReactNode
}

const buttonTypeStyles = {
  primary: {
    textColor: "white",
    primaryColor: "white",
    borderColor: "black",
  },
  secondary: {
    textColor: "black",
    primaryColor: "black",
    borderColor: "inherit",
  },
  special: {
    textColor: "purple",
    primaryColor: "red",
    borderColor: "inherit",
  },
}

const CustomButton = ({ label, icon, btype }: ButtonProps) => {
  const buttonStyle = buttonTypeStyles[btype]
  const textColor = buttonStyle.textColor
  const primaryColor = buttonStyle.primaryColor
  const borderColor = buttonStyle.borderColor

  return (
    <ConfigProvider
      theme={{
        token: {

          colorText: `${textColor}`,
          colorPrimary: `${primaryColor}`,
          borderRadius: 4,

          colorBgContainer: `${borderColor}`,
          colorBorder: "black",
          fontSize: 15,
          fontFamily: "Cairo Play",
        },
      }}
    >
      <Button type="default" size="large" icon={icon}>
        {label}
      </Button>
    </ConfigProvider>
  )
}

export default CustomButton
