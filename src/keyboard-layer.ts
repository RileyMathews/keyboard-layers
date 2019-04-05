import * as vscode from 'vscode'

export default class KeyboardLayer {
  public isActive: boolean;

  public constructor () {
    this.isActive = false;
  }

  public enable() {
    this.isActive = true;
  }

  public disable() {
    this.isActive = false;
  }

  public toggle() {
    this.isActive = !this.isActive;
  }
}