import * as vscode from 'vscode';

export default class StatusBarStatusDisplay implements StatusDisplayInterface {
    private item: vscode.StatusBarItem;

    public constructor() {
        this.item = vscode.window.createStatusBarItem();
        this.item.text = "-- LAYER ACTIVE --";
    }

    public displayEnabled() {
        this.item.show();
    }

    public displayDisabled() {
        this.item.hide();
    }
}