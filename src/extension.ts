// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { request } from 'http';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "isam-vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('isam-vscode.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from isam-vscode!');
		console.log('posted message updated2')

		const req = request(
			{
			  host: 'jsonplaceholder.typicode.com',
			  path: '/todos/1',
			  method: 'GET',
			},
			response => {
			  var chunks = [];
			  response.on('data', (chunk) => {
				chunks.push(chunk);
			  });
			  response.on('end', () => {
				const result = Buffer.concat(chunks).toString();
				console.log(result);
			  });
			}
		  );
		   
		  req.end();
	});

	context.subscriptions.push(disposable);

	// command 2
	let disposable2 = vscode.commands.registerCommand('isam-vscode.sayHello', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from isam-vscode!');
		console.log('triggered the second thing')
	});

	context.subscriptions.push(disposable2);

}


// this method is called when your extension is deactivated
export function deactivate() {}
