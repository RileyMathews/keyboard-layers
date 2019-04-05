import * as vscode from 'vscode'

export default class KeyboardLayer {
  public isActive: boolean;
  public configuration: vscode.WorkspaceConfiguration;

  public constructor () {
    this.isActive = false;
    this.configuration = vscode.workspace.getConfiguration('keyboardlayer')
  }

  public enable() {
    this.setActive(true);
  }

  public disable() {
    this.setActive(false)
  }

  public toggle() {
    this.setActive(!vscode.workspace.getConfiguration('keyboardlayer').get('active'))
  }

  private setActive(bool: boolean) {
    const config = vscode.workspace.getConfiguration('keyboardlayer')
    config.update('active', bool, true)
    vscode.window.showInformationMessage(`keyboard layer ${config.get('active') ? "on" : "off"}`)
  }
}