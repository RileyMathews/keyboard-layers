import * as vscode from 'vscode';
import ConfigurationLoader from './configuration-loader';
import StatusDisplayController from './status-display-interface/status-display-controller';


export default class KeyboardLayer {
    public isActive: boolean;
    public configuration: ConfigurationLoader;
    private statusDisplayController: StatusDisplayController;

    public constructor(statusDisplayController: StatusDisplayController, config: ConfigurationLoader) {
        this.isActive = false;
        this.configuration = config.loadConfiguration();
        this.statusDisplayController = statusDisplayController;
    }

    public enable() {
        if (!this.isActive) {
            this.configuration.loadConfiguration();
            this.setActive(true);
        }
    }

    public disable() {
        if (this.isActive) {
            this.setActive(false);
        }
    }

    public toggle() {
        this.setActive(!vscode.workspace.getConfiguration('keyboardlayer').get('active'));
    }

    private setActive(bool: boolean) {
        const config = vscode.workspace.getConfiguration('keyboardlayer');
        config.update('active', bool, true);
        bool ? this.statusDisplayController.enable() : this.statusDisplayController.disable();
        this.isActive = bool;
    }
}