import * as vscode from 'vscode'

export default class StatusDisplay {
    private item: vscode.StatusBarItem

    public constructor() {
        this.item = vscode.window.createStatusBarItem()
        this.item.text = "Layer Active"
    }

    public displayEnabled() {
        this.item.show()
    }

    public displayDisabled() {
        this.item.hide()
    }
}