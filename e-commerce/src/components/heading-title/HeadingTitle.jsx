/* eslint-disable react/prop-types */


const HeadingTitle = ({title}) => {
  return (
    <div style={wrapperStyles}>
        <h2 style={titleStyles}>{title}</h2>
    </div>
  )
}

const wrapperStyles={
    marginLeft:'20px',
    marginTop:'40px'

}

const titleStyles={
    color:'var(--primary-color',
}

export default HeadingTitle