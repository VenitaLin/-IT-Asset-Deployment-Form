
export const validateForm = (props) => {
    if(!props.staffName || !props.division || !props.designation || !props.department){
        return false
    }else{
        return true
    }
}