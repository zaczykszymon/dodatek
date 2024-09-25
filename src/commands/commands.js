function openSignTaskpane() {
    Office.context.ui.displayDialogAsync(
        'https://raw.githubusercontent.com/zaczykszymon/dodatek/main/src/taskpane/taskpane.html',
        { height: 50, width: 30 },
        function (asyncResult) {
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                console.error("Failed to open the taskpane:", asyncResult.error.message);
            } else {
                console.log("Taskpane opened successfully.");
            }
        }
    );
}
