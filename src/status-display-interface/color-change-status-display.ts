import * as vscode from 'vscode';

export default class ColorChangeStatusDisplay implements StatusDisplayInterface {
    private colorConfiguration!: vscode.WorkspaceConfiguration;
    private previousCustomization!: vscode.WorkspaceConfiguration;
    private layerColor: String;

    public constructor() {
        this.colorConfiguration = vscode.workspace.getConfiguration();
        this.layerColor = vscode.workspace.getConfiguration('keyboardlayer').get('layerColor', '#2f4f6f');
    }

    public displayEnabled() {
        this.previousCustomization = vscode.workspace.getConfiguration('workbench.colorCustomizations');
        this.colorConfiguration.update('workbench.colorCustomizations', {
            "statusBar.background": this.layerColor,
            "activityBar.background": this.layerColor,
            "sideBar.background": this.layerColor,
            "editor.background": this.layerColor,
            "panel.background": this.layerColor
        }, true);
    }

    public displayDisabled() {
        this.colorConfiguration.update('workbench.colorCustomizations', this.previousCustomization, true);
    }
}