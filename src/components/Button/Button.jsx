export const Button = ({text, type="button", disabled}) => {
  return (
    <button type={type} id="next-btn" disabled={disabled} >
        {text}
    </button>
  )
}
 