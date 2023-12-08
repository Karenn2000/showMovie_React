import styles from './styles.module.css'

const IconButton = ({icon, title, selected, isShown}) => {
    return (
        <div className={`${styles.container}${selected ? '_active' : ''}`}>
            <img style={{
                width: 30,
                height: 30
            }} src={icon}/>
            <span>{title}</span>
        </div>
    )
}

export default IconButton