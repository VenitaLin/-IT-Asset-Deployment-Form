export const validateForm = (props) => {
    if (!props.staffName || !props.division || !props.designation || !props.department) {
        return false
    } else {
        return true
    }
}

export const formatAcc = (stateAccs) => {
    return stateAccs.filter(
        (Acc: { isChecked: boolean; }) => Acc.isChecked === true)
        .map((filterAcc: { value: any; }) => (filterAcc.value)).toString()
}

export const setFormProps = (props) => {
    let _spForm = {
        Title: `Create on ` + new Date(),
        staffName: props.staffName,
        division: props.division,
        designation: props.designation,
        department: props.department,
        brand: props.brand,
        model: props.model,
        serialNum: props.serialNum,
        assetTag: props.assetTag,
        formatedAcc: props.formatedAcc,
        otherAccessories: props.otherAccessories,
        issReName: props.issReName,
        issIssName: props.issIssName,
        issReSig: props.issReSig,
        issIssSig: props.issIssSig,
        issReDate: props.issReDate,
        issIssDate: props.issIssDate,
        returnReName: props.returnReName,
        returnAckName: props.returnAckName,
        returnReSig: props.returnReSig,
        returnAckSig: props.returnAckSig,
        returnReDate: props.returnReDate,
        returnAckDate: props.returnAckDate
    };
    return _spForm
}