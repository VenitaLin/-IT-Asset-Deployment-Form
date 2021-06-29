import * as React from 'react';
import styles from './ItDeploymentForm.module.scss';
import { IItDeploymentFormProps } from './IItDeploymentFormProps';
import { IItDeploymentFormState, initialSate } from './IItDeploymentFormState';
import * as App from './ItDeploymentFormApp';
import * as formData from './ItDeploymentFormData';
import * as Utils from '../../utils';
import SignaturePad from 'react-signature-canvas'

export default class ItDeploymentForm extends React.Component<IItDeploymentFormProps, IItDeploymentFormState> {

  constructor(props: IItDeploymentFormProps, state: IItDeploymentFormState) {
    super(props);
    this.state = {
      ...initialSate,
    }
  }
  issReSigPad: any; 
  issIssSigPad: any; 
  returnReSigPad: any; 
  returnAckSigPad: any;
  public render(): React.ReactElement<IItDeploymentFormProps> {

    return (
      <div className={ styles.itDeploymentForm }>
        <div className={ styles.container }>
          <div className={ styles.title }>
            <img src={require('../../../img/sbfLogo.png')}></img><br></br>
            DTS IT Asset Deployment Form
          </div>
          <form id="itForm">
                <table>
                  <tbody>
                    <tr>
                      <th colSpan={4}>Staff Details</th>
                    </tr>
                    <tr>
                      <td>Staff Name</td>
                      <td><input type="text" name="staffName" placeholder="Staff Name" onChange={this.handleChange} required></input></td>
                      <td>Division</td>
                      <td>
                        <select name="division" value={this.state.division} onChange={this.handleChange} required>
                          <option value="" hidden>Choose an item</option>
                          {formData.divisions.map((division, index) => <option key={index} value={division} >{division}</option>)}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Designation</td>
                      <td>
                        <select name="designation" value={this.state.designation} onChange={this.handleChange} required>
                          <option value="" hidden >Choose an item</option>
                          {formData.designations.map((designation, index) => <option key={index} value={designation} >{designation}</option>)}
                        </select>
                      </td>
                      <td>Department</td>
                      <td>
                        <select name="department" value={this.state.department} onChange={this.handleChange} required>
                          <option value="" hidden>Choose an item</option>
                          {formData.departments.map((department, index) => <option key={index} value={department}>{department}</option>)}
                        </select>
                      </td>
                    </tr>   
                    <tr>
                      <th colSpan={4}>Laptop Details</th>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>
                        <select name="brand" value={this.state.brand} onChange={this.handleChange}>
                          <option value="" hidden >Choose an item</option>
                          {formData.brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                        </select>
                      </td>
                      <td>Model</td>
                      <td>
                        <select name="model" value={this.state.model} onChange={this.handleChange}>
                          <option value="" hidden >Choose an item</option>
                          {formData.models.map((model, index) => <option key={index} value={model}>{model}</option>)}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Serial Number</td>
                      <td><input type="text" name="serialNum" value={this.state.serialNum} placeholder="Serial Number" onChange={this.handleChange} required></input></td>
                      <td>Asset Tag</td>
                      <td><input type="text" name="assetTag" value={this.state.assetTag} placeholder="Asset Tag" onChange={this.handleChange} required></input></td>
                    </tr>              
                    <tr>
                      <th colSpan={4}>Accessories</th>
                    </tr>
                    {/* <tr>
                      <td><label><input type="checkbox" name="accessories" value="Power Adapter" onClick={this.handleCheckboxChange}></input>Power Adapter</label></td>
                      <td><label><input type="checkbox" name="accessories" value="HDMI to GVA Adaptor" onClick={this.handleCheckboxChange}></input>HDMI to GVA Adaptor</label></td>   
                      <td><label><input type="checkbox" name="accessories" value="Keyboard" onClick={this.handleCheckboxChange}></input>Keyboard</label></td>
                      <td><label><input type="checkbox" name="accessories" value="Cable Lock" onClick={this.handleCheckboxChange}></input>Cable Lock</label></td>
                    </tr> */}
                    <tr>
                      <td colSpan={4}>
                        <div className={styles.checkBoxLabelGroup}>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="Power Adapter" onClick={this.handleCheckboxChange}></input>Power Adapter</label>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="HDMI to GVA Adaptor" onClick={this.handleCheckboxChange}></input>HDMI to GVA Adaptor</label>   
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="Keyboard" onClick={this.handleCheckboxChange}></input>Keyboard</label>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="Cable Lock" onClick={this.handleCheckboxChange}></input>Cable Lock</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <div className={styles.checkBoxLabelGroup}>
                        <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="Notebook Bag" onClick={this.handleCheckboxChange}></input>Notebook Bag</label>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="RJ45 Dongle" onClick={this.handleCheckboxChange}></input>RJ45 Dongle</label>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="USB Mouse" onClick={this.handleCheckboxChange}></input>USB Mouse</label>
                          <label className={styles.checkBoxLabel}><input type="checkbox" name="accessories" value="Monitor" onClick={this.handleCheckboxChange}></input>Monitor</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label><input type="checkbox" name="accessories" value="Others" onClick={this.handleCheckboxChange}></input>Others</label>
                      </td>
                      <td colSpan={3}>
                        <u>
                        <input type="text" name="otherAccessories" className={ styles.otherAccessories } placeholder="Others" onChange={this.handleChange}></input>
                        </u> 
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4}><u>Declaration</u></th>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <span>
                          By signing this form, I understand that: <br></br>
                        </span>
                        <ol type="a">
                          <li>I am responsible for the equipment(s) issued to me and that I will care for the equipment(s) in such a manner as to prevent loss or damage.</li>
                          <li>All programs or applications are to be approved and installed by the DTS Department.</li>
                          <li>I will perform regular housekeeping to ensure that the Notebook is functioning at its optimal at all times. </li>
                          <li>To extend the lifespan of the Notebook effectively and at its optimal performance, daily <b><u>SHUTDOWN</u></b> is <b><u>HIGHLY RECOMMENDED</u></b>.</li>
                          <li>For the loss of Notebook, I will bear the pro-rated cost based on net book value (3-years)</li>
                          <li>For the loss of other IT equipment(s), I will either bear the full cost or replace with a similar one.</li>
                        </ol>
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4}><u>Issuance</u></th>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <b>Received by:</b>
                      </td>
                      <td colSpan={2}>
                        <b>Issued by:</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td><input type="text" name="issReName" placeholder="Name" onChange={this.handleChange} ></input></td>
                      <td>Name</td>
                      <td><input type="text" name="issIssName" placeholder="Name" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr>
                      <td>Signature</td>
                      <td className={styles.sigPad}>
                        <SignaturePad
                          name="issReSigPad" penColor='black'
                          canvasProps={{
                            // className: styles.sigPad,
                            width: 170, 
                            height: 100
                          }}
                          ref={(ref: any) => {
                            this.issReSigPad = ref
                          }}>
                        </SignaturePad>
                        <button type="button" name="issReSig" className={styles.button} onClick={(e) => this.clear(e)}>Clear</button>
                      </td>
                      <td>Signature</td>
                      <td className={styles.sigPad}>
                        <SignaturePad
                          name="issIssSigPad" penColor='black'
                          canvasProps={{
                            // className: styles.sigPad,
                            width: 170, 
                            height: 100
                          }}
                          ref={(ref: any) => {
                            this.issIssSigPad = ref
                          }}>
                        </SignaturePad>
                        <button type="button" name="issIssSig" className={styles.button} onClick={(e) => this.clear(e)}>Clear</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td><input type="date" name="issReDate" placeholder="Date" onChange={this.handleChange} ></input></td>
                      <td>Name</td>
                      <td><input type="date" name="issIssDate" placeholder="Date" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr>
                      <th colSpan={4}><u>Return</u></th>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <b>Received by:</b>
                      </td>
                      <td colSpan={2}>
                        <b>Issued by:</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td><input type="text" name="returnReName" placeholder="Name" onChange={this.handleChange} ></input></td>
                      <td>Name</td>
                      <td><input type="text" name="returnAckName" placeholder="Name" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr>
                      <td>Signature</td>
                      <td className={styles.sigPad}>
                        <SignaturePad
                          name="returnReSigPad" penColor='black'
                          canvasProps={{
                            // className: styles.sigPad,
                            width: 170, 
                            height: 100
                          }}
                          ref={(ref: any) => {
                            this.returnReSigPad = ref
                          }}
                        />
                        <button type="button" name="returnReSig" className={styles.button} onClick={(e) => this.clear(e)}>Clear</button>
                      </td>
                      <td>Signature</td>
                      <td className={styles.sigPad}>
                        <SignaturePad
                          name="returnAckSigPad" penColor='black'
                          canvasProps={{
                            // className: styles.sigPad,
                            width: 170, 
                            height: 100
                          }}
                          ref={(ref: any) => {
                            this.returnAckSigPad = ref
                          }}
                        />
                        <button type="button" name="returnAckSig" className={styles.button} onClick={(e) => this.clear(e)}>Clear</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td><input type="date" name="returnReDate" placeholder="Date" onChange={this.handleChange} ></input></td>
                      <td>Name</td>
                      <td><input type="date" name="returnAckDate" placeholder="Date" onChange={this.handleChange} ></input></td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <div className={styles.buttonGroup}>
                          <button type="submit" className={ styles.button } onClick={(e) => this.handleSubmit(e)}>Submit</button>
                          <button type="reset" className={ styles.button } onClick={this.resetForm}>Reset</button>
                        </div>
                        <div className={styles.errorMsgBox}>
                          <span className={styles.errorMsg}>{this.state.msg.error}</span>
                        </div>
                        <div className={styles.successMsgBox}>
                          <span className={styles.successMsg}>{this.state.msg.success}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
        </div>
      </div>
    );
  }

  resetForm = (e) => {
    this.setState({
      ...initialSate
    })
    this.issReSigPad.clear();
    this.issIssSigPad.clear();
    this.returnReSigPad.clear();
    this.returnAckSigPad.clear();
  }

  handleValidation = () => {
    if(!App.validateForm(this.state)){
      this.setState({
        status: 'Invalid form',
        msg:{error: 'Please fill up the required fields.'}
      })
      return false
    }else{
      this.setState({
        status: 'Valid form!',
        msg:{error: ''}
      })
      return true
    }
  }

  createForm = () => {
    this.setState({
      status: 'Creating item...',
    });

    let uri = this.props.siteUrl + "/_api/web/lists/getbytitle('" + this.props.listName + "')/items";
    
    let acc: any;
    const stateAccs = this.state.accessories;
    acc = stateAccs.filter((Acc: { isChecked: boolean; }) => Acc.isChecked === true).map((filterAcc: { value: any; }) => (filterAcc.value)).toString()

    this.setState({
      formatedAcc: acc,
      issReSig: this.issReSigPad.getTrimmedCanvas().toDataURL("image/png"),
      issIssSig: this.issIssSigPad.getTrimmedCanvas().toDataURL("image/png"),
      returnReSig: this.returnReSigPad.getTrimmedCanvas().toDataURL("image/png"),
      returnAckSig: this.returnAckSigPad.getTrimmedCanvas().toDataURL("image/png")
    }, function(){
      let _spForm = {
        Title: `Create on ` + new Date(),
        staffName: this.state.staffName,
        division: this.state.division,
        designation: this.state.designation,
        department: this.state.department,
        brand: this.state.brand,
        model: this.state.model,
        serialNum : this.state.serialNum,
        assetTag: this.state.assetTag,
        formatedAcc: this.state.formatedAcc,
        otherAccessories: this.state.otherAccessories,
        issReName: this.state.issReName,
        issIssName: this.state.issIssName,
        issReSig: this.state.issReSig,
        issIssSig: this.state.issIssSig,
        issReDate: this.state.issReDate,
        issIssDate: this.state.issIssDate,
        returnReName: this.state.returnReName,
        returnAckName: this.state.returnAckName,
        returnReSig: this.state.returnReSig,
        returnAckSig: this.state.returnAckSig,
        returnReDate: this.state.returnReDate,
        returnAckDate: this.state.returnAckDate
      };
      Utils.postData(this.props.spHttpClient, uri, JSON.stringify(_spForm)).then(response => {
        if(response.status === 201){
          this.resetForm();
          this.setState({
            msg:{
              success: 'Form submitted successfully!'
            }
          })
        }else{
          this.setState({
            msg:{
              error: 'Form submission failed.'
            }
          })
        }
      });
      
    })
  }

  handleSubmit = (e) => {
    console.log(this.props);
    e.preventDefault();
    this.setState({
      status: 'Validating form...',
    }, function(){
      if(this.handleValidation()){
        this.createForm();
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    }, function(){
    })
  }

  handleCheckboxChange = (e) => {
    const selectedAcc = e.target.value
    let currAccs = this.state.accessories
    currAccs.forEach((Acc: { value: any; isChecked: any; }) =>{
      if(Acc.value === selectedAcc)
        Acc.isChecked = e.target.checked
    })
    this.setState({
      accessories: currAccs
    })
  };

  clear = (e) => {
    if (e.target.name === 'issReSig'){
      this.issReSigPad.clear();
    } else if (e.target.name === 'issIssSig') {
      this.issIssSigPad.clear();
    } else if (e.target.name === 'returnReSig') {
      this.returnReSigPad.clear();
    } else {
      this.returnAckSigPad.clear();
    }
  }
}
