export default function Imagebackgroundnotext({ background }) {
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${background})` }}
    />
  )
}
