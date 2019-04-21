import * as vscode from 'vscode'

export default class StatusDisplay {
    private item: vscode.StatusBarItem;
    private colorConfiguration!: vscode.WorkspaceConfiguration;
    private previousCustomization!: vscode.WorkspaceConfiguration;
    private layerColor: String;

    public constructor() {
        this.colorConfiguration = vscode.workspace.getConfiguration()
        this.item = vscode.window.createStatusBarItem()
        this.item.text = "Layer Active",
        this.layerColor = vscode.workspace.getConfiguration('keyboardlayer').get('layerColor', '#2f4f6f');
    }

    public displayEnabled() {
        this.previousCustomization = vscode.workspace.getConfiguration('workbench.colorCustomizations')
        this.colorConfiguration.update('workbench.colorCustomizations', {
            "statusBar.background": this.layerColor,
            "activityBar.background": this.layerColor,
            "sideBar.background": this.layerColor,
            "editor.background": this.layerColor,
            "panel.background": this.layerColor
        }, true)
        console.log(this.previousCustomization)
        this.item.show()
    }

    public displayDisabled() {
        this.colorConfiguration.update('workbench.colorCustomizations', this.previousCustomization, true)
        this.item.hide()
    }
}