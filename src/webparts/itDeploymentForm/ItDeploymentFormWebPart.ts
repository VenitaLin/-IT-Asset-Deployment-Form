import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import ItDeploymentForm from './components/ItDeploymentForm';
import { IItDeploymentFormProps } from './components/IItDeploymentFormProps';

export interface IItDeploymentFormWebPartProps {
  description: string;
}

export default class ItDeploymentFormWebPart extends BaseClientSideWebPart<IItDeploymentFormWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IItDeploymentFormProps> = React.createElement(
      ItDeploymentForm,
      {
        description: this.properties.description,
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        listName: "it-deployment-form" //set the SharePoint List Name
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  // protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  //   return {
  //     pages: [
  //       {
  //         header: {
  //           description: strings.PropertyPaneDescription,
  //         },
  //         groups: [
  //           {
  //             groupName: strings.BasicGroupName,
  //             groupFields: [
  //               // PropertyPaneTextField('description', {
  //               //   label: strings.ListNameFieldLabel
  //               // })
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   };
  // }
}
