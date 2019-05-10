import * as vscode from 'vscode';
import KeyboardLayer from './keyboard-layer';
import ColorChangeStatusDisplay from './status-display-interface/color-change-status-display';
import StatusBarStatusDisplay from './status-display-interface/status-bar-status-display';


export function activate(context: vscode.ExtensionContext) {
	const config :String = vscode.workspace.getConfiguration('keyboardlayer').get('notification', 'Status Bar Icon');

	let notification :StatusDisplayInterface;
	switch(config) {
		case 'Status Bar Icon':
			notification = new StatusBarStatusDisplay;
			break;
		case 'Theme Color Change':
			notification = new ColorChangeStatusDisplay;
			break;
		default:
			notification = new StatusBarStatusDisplay;
	}

	const app = new KeyboardLayer(notification);

	let enableLayer = vscode.commands.registerCommand('keyboardlayer.activate', () => {
		app.enable();
	});

	let disableLayer = vscode.commands.registerCommand('keyboardlayer.deactivate', () => {
		app.disable();
	});

	let toggleLayer = vscode.commands.registerCommand('keyboardlayer.toggle', () => {
		app.toggle();
	});

	context.subscriptions.push(toggleLayer);
	context.subscriptions.push(enableLayer);
	context.subscriptions.push(disableLayer);
}

export function deactivate() { }
