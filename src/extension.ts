import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let enableLayer = vscode.commands.registerCommand('keyboardlayer.activate', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Turning on keyboard layer');
	});

	let disableLayer = vscode.commands.registerCommand('keyboardlayer.deactivate', () => {
		vscode.window.showInformationMessage('Turning off keyboard layer');
	});

	context.subscriptions.push(enableLayer);
	context.subscriptions.push(disableLayer)
}

// this method is called when your extension is deactivated
export function deactivate() {}
