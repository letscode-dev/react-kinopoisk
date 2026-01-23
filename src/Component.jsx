const Description = (props) => {
  console.log(props)
  return (
    <>
      <div>
        {props.children}
      </div>
      <p>{props.title}</p>
      <p>{props.count}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab, unde officiis natus veniam cumque a numquam minima aliquid dolore laborum repellat exercitationem animi commodi sequi beatae dignissimos id impedit.</p>
    </>
  )
}

export default Description
