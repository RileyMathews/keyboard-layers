import * as vscode from 'vscode'
import StatusDisplay from './status-display'

export default class KeyboardLayer {
  public isActive: boolean;
  public configuration: vscode.WorkspaceConfiguration;
  private statusDisplay: StatusDisplay;

  public constructor (statusDisplay: StatusDisplay) {
    this.isActive = false;
    this.configuration = vscode.workspace.getConfiguration('keyboardlayer');
    this.statusDisplay = statusDisplay;
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
    bool ? this.statusDisplay.displayEnabled() : this.statusDisplay.displayDisabled();
    this.isActive = bool;
  }
}