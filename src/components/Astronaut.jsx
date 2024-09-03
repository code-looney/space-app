const Astronaut = (props) => {
    const {path, alt} = props;

    return (
        <img src={path} alt={alt} />
    )
}

export default Astronaut