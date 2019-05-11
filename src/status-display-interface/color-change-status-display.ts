import * as vscode from 'vscode';
import ConfigurationLoader from '../configuration-loader';

export default class ColorChangeStatusDisplay implements StatusDisplayInterface {
    private colorConfiguration!: vscode.WorkspaceConfiguration;
    private previousCustomization!: vscode.WorkspaceConfiguration;
    private layerColor: String;
    private config: ConfigurationLoader;

    public constructor(configuration: ConfigurationLoader) {
        this.colorConfiguration = vscode.workspace.getConfiguration();
        this.config = configuration;
        this.layerColor = configuration.loadConfiguration().config.get('layerColor', '#2f4f6f')
    }

    public displayEnabled() {
        this.layerColor = this.config.loadConfiguration().config.get('layerColor', '#2f4f6f')
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