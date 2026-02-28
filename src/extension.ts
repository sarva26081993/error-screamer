import * as vscode from 'vscode';
let screaming = true;
const errorPatterns = [/error/i, /failed/i, /exception/i, /fatal/i, /crash/i, /undefined/i, /null reference/i, /syntax error/i, /warning/i];

export function activate(context: vscode.ExtensionContext) {
    console.log('Error Screamer extension is now active!');
    let toggleCommand = vscode.commands.registerCommand('error-screamer.toggleScreaming', () => {
        screaming = !screaming;
        vscode.window.showInformationMessage(screaming ? '🔊 Error Screaming ENABLED' : '🔇 Error Screaming DISABLED');
    });
    context.subscriptions.push(toggleCommand);
    const disposable = vscode.window.onDidChangeActiveTerminal(async (terminal) => {
        if (!terminal) return;
        const outputChannel = vscode.window.createOutputChannel('Error Screamer');
        outputChannel.appendLine('Monitoring terminal for errors...');
    });
    context.subscriptions.push(disposable);
    setupErrorDetection(context);
}

function setupErrorDetection(context: vscode.ExtensionContext) {
    const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('errorScreamer')) {
            console.log('Error Screamer settings changed');
        }
    });
    context.subscriptions.push(disposable);
}

export function screamFaaah(context: vscode.ExtensionContext) {
    vscode.window.showErrorMessage('🚨 FAAAAAAAAHHHHHHH!!! 🚨', { modal: false });
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBar.text = '🔴 SCREAMING!!! 🔴';
    statusBar.tooltip = 'An error was detected!';
    statusBar.show();
    vscode.window.showWarningMessage('💥 ERROR DETECTED - FAAAAAAH!!!');
    setTimeout(() => {
        statusBar.dispose();
    }, 2000);
    console.log('🔊 FAAAAAAAAHHHHHHHHHHHHHHHHH!!! 🔊');
}

export function registerTestCommand(context: vscode.ExtensionContext) {
    const testCommand = vscode.commands.registerCommand('error-screamer.testScream', () => {
        screamFaaah(context);
    });
    context.subscriptions.push(testCommand);
}

export function deactivate() {
    console.log('Error Screamer extension is now deactivated');
}