import * as vscode from 'vscode'

class StatusDisplay {
    public displayEnabled() {
        vscode.window.showInformationMessage("layer is enabled")
    }

    public displayDisabled() {
        vscode.window.showInformationMessage("layer is disabled")
    }
}