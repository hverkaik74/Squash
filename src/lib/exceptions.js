//
// exceptions.js
//

class Exceptions {

    static throw( message ) {

        let throwMessage = "";

        if ( message === undefined || message === null ) {
            throwMessage = "Parameter 'message' not set.";
        } else {
            throwMessage = message.toString();
        }

        let stackTrace = (new Error("StackLog")).stack.split("\n");

        throw throwMessage + "\n" + "\n" + stackTrace
    }
}