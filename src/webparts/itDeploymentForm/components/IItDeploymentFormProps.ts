import { SPHttpClient } from '@microsoft/sp-http';

export interface IItDeploymentFormProps {
  description: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  listName: string;
}
