import Image from 'next/image'

export default function ProjectCard({ title, description, image }) {
  return (
    <div>
      <Image src={image} alt={title} width={300} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
