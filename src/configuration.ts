import { workspace } from "vscode";

export default function loadConfiguration() {
  const workspaceConfiguration = workspace.getConfiguration('keyboardlayer');
  return workspaceConfiguration;
}