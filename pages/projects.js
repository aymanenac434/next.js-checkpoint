import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <Layout>
      <h1>My Projects</h1>
      <ProjectCard title="Project 1" description="Description of project 1" image="/images/project1.jpg" />
    </Layout>
  )
}
