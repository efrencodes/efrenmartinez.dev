import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = (props) => {
	const { name, imgSrc, imgAlt, tecnologies, description, reverse, url } =
		props
	return (
		<div
			className={styles.cardContainer}
			style={{ 'flex-direction': reverse ? 'row' : 'row-reverse' }}
		>
			<div className={styles.cardImage}>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Image src={imgSrc} alt={imgAlt} width={400} height={280} />
				</a>
			</div>
			<div className={styles.cardDescription}>
				<h4>{name}</h4>
				<p>{description}</p>
				<p>{tecnologies.join(' ')}</p>
				Visit{' '}
				<a href={url} target="_blank" rel="noopener noreferrer">
					project
				</a>
			</div>
		</div>
	)
}

export default Card
