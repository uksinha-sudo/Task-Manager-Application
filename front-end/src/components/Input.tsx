
export const Input = (props : {
    reference?: any,
    placeholder: string,
    type: string,
    styles: string,
    require?: boolean
}) => {
    return (
        <>
            <input placeholder={props.placeholder} ref={props.reference} type={props.type} className={`${props.styles}`} required={props.require}/>
        </>
    )
}