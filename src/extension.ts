import * as vscode from 'vscode';
import KeyboardLayer from './keyboard-layer';
import ConfigurationLoader from './configuration-loader';
import StatusDisplayController from './status-display-interface/status-display-controller';


export function activate(context: vscode.ExtensionContext) {
	const app = new KeyboardLayer(new StatusDisplayController(new ConfigurationLoader), new ConfigurationLoader);

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
