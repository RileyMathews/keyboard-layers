import * as vscode from 'vscode'
import StatusDisplay from './status-display'

export default class KeyboardLayer {
  private static readonly emptyDisposable = vscode.Disposable.from({ dispose: () => { } });
  public isActive: boolean;
  public configuration: vscode.WorkspaceConfiguration;
  private statusDisplay: StatusDisplay;
  private typeDisposable: vscode.Disposable;

  public constructor (statusDisplay: StatusDisplay) {
    this.isActive = false;
    this.configuration = vscode.workspace.getConfiguration('keyboardlayer');
    this.statusDisplay = statusDisplay;
    this.typeDisposable = KeyboardLayer.emptyDisposable;
  }

  public enable() {
    this.setActive(true);
  }

  public disable() {
    this.setActive(false);
  }

  public toggle() {
    this.setActive(!vscode.workspace.getConfiguration('keyboardlayer').get('active'));
  }

  private setActive(bool: boolean) {
    const config = vscode.workspace.getConfiguration('keyboardlayer');
    config.update('active', bool, true);
    this.registerTypeCommand(bool)
    bool ? this.statusDisplay.displayEnabled() : this.statusDisplay.displayDisabled();
  }

  private registerTypeCommand(bool: boolean) {
    if (bool) {
      this.typeDisposable = vscode.commands.registerCommand('type', async _args => {
        return;
      })
    } else {
      this.typeDisposable.dispose()
    }
  }
}