import Apple from './Apple'
import second from 'src/assets/images/tree.png'

const Tree = ({ className, apples }) => {
  return (
    <div id="tree"
      className={className}>
      {apples.map((apple) => {
        return <Apple key={apple.key}
          className={apple.className} />
      })}

      <img src={second}
        className="tree" />
    </div>
  )
}

export default Tree
