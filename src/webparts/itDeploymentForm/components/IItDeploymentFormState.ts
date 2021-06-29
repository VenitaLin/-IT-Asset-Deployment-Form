import { List } from "@microsoft/office-ui-fabric-react-bundle";

export interface IItDeploymentFormState {
  status: string;
  staffName: string;
  division: string;
  designation: string;
  department: string;
  brand: string;
  model: string,
  serialNum: string,
  assetTag: string,
  accessories: any,
  formatedAcc: any,
  otherAccessories: string,
  msg: any,
  issReName: string,
  issIssName: string,
  issReSig: any,
  issIssSig: any,
  issReDate: any,
  issIssDate: any,
  returnReName: any,
  returnAckName: any,
  returnReSig: any,
  returnAckSig: any,
  returnReDate: any,
  returnAckDate: any,
}

export const initialSate = {
  status: 'Ready',
  staffName: '',
  division: '',
  designation: '',
  department: '',
  brand: '',
  model: '',
  serialNum: '',
  assetTag: '',
  accessories: [
    {value: "Power Adapter", isChecked: false},
    {value: "HDMI to GVA Adaptor", isChecked: false},
    {value: "Keyboard", isChecked: false},
    {value: "Cable Lock", isChecked: false},
    {value: "Notebook Bag", isChecked: false},
    {value: "RJ45 Dongle", isChecked: false},
    {value: "USB Mouse", isChecked: false},
    {value: "Monitor", isChecked: false},
    {value: "Others", isChecked: false}
  ],
  formatedAcc: '',
  otherAccessories: '',
  msg: {
    error: '',
    success: ''
  },
  issReName: '',
  issIssName: '',
  issReSig: '',
  issIssSig: '',
  issReDate: '',
  issIssDate: '',
  returnReName: '',
  returnAckName: '',
  returnReSig: '',
  returnAckSig: '',
  returnReDate: '',
  returnAckDate: ''
}
