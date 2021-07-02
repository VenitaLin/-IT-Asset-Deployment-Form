import { SPHttpClient } from "@microsoft/sp-http";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IItDeploymentFormProps {
  description: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  listName: string;
  context: WebPartContext;
}
