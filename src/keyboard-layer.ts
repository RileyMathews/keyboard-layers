import * as vscode from 'vscode';

export default class KeyboardLayer {
  public isActive: boolean;
  public configuration: vscode.WorkspaceConfiguration;
  private statusDisplayInterface: StatusDisplayInterface;

  public constructor (statusDisplayInterface: StatusDisplayInterface) {
    this.isActive = false;
    this.configuration = vscode.workspace.getConfiguration('keyboardlayer');
    this.statusDisplayInterface = statusDisplayInterface;
  }

  public enable() {
    if(!this.isActive) {
      this.setActive(true);
    }
  }

  public disable() {
    if(this.isActive) {
      this.setActive(false);
    }
  }

  public toggle() {
    this.setActive(!vscode.workspace.getConfiguration('keyboardlayer').get('active'));
  }

  private setActive(bool: boolean) {
    const config = vscode.workspace.getConfiguration('keyboardlayer');
    config.update('active', bool, true);
    bool ? this.statusDisplayInterface.displayEnabled() : this.statusDisplayInterface.displayDisabled();
    this.isActive = bool;
  }
}