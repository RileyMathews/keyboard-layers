import * as vscode from 'vscode'

export default class StatusDisplay {
    public displayEnabled() {
        vscode.window.showInformationMessage("layer is enabled")
    }

    public displayDisabled() {
        vscode.window.showInformationMessage("layer is disabled")
    }
}