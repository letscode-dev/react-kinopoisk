import MUIButton from "@mui/material/Button"

// interface IProps {
//   children: React.ReactNode
//   variant: "text" | "outlined" | "contained"
//   disabled?: boolean
//   onClick: (event: React.SyntheticEvent) => void | null
// }

const UiButton = (props) => {
  const { children, variant, onClick, disabled = false } = props

  return (
    <MUIButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </MUIButton>
  )
}

export default UiButton
