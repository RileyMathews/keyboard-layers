import * as vscode from 'vscode';

export default class ConfigurationLoader {
    public config: vscode.WorkspaceConfiguration;

    public constructor() {
        this.config = vscode.workspace.getConfiguration('keyboardlayer');
    }

    public loadConfiguration(): ConfigurationLoader {
        this.config = vscode.workspace.getConfiguration('keyboardlayer');
        return this;
    }
}