import styles from './styles.module.css'

const Description = (props) => {
  return (
    <>
      <h1 className="header">Description</h1>
      <div>
        {props.children}
      </div>
      <p className={styles.item}>{props.title}</p>
      <p>{props.count}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab, unde officiis natus veniam cumque a numquam minima aliquid dolore laborum repellat exercitationem animi commodi sequi beatae dignissimos id impedit.</p>
    </>
  )
}

export default Description
