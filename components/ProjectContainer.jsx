import styles from '../styles/ProjectContainer.module.css'
import Card from '../components/Card'

const ProjectContainer = (props) => {
	const { projects } = props
	return (
		<section className={styles.projectContainer}>
			<h3 className={styles.projectTitle}>
				Some great projects I worked on
			</h3>
			<ul className={styles.projectList}>
				{projects.map((project) => (
					<li key={project.name}>
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card
								name={project.name}
								imgSrc={project.img.src}
								imgAlt={project.img.alt}
								tecnologies={project.tecnologies}
								description={project.description}
								reverse={project.reverse}
							/>
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}

export default ProjectContainer