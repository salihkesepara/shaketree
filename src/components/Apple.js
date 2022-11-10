import apple from 'src/assets/images/apple.png'

const Apple = ({ className }) => {
  return <img src={apple}
    className={`apple ${className}`} />
}

export default Apple
