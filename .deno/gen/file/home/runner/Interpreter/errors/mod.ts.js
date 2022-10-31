import messages from "./messages.ts";
class InterpreterError extends Error {
    code;
    constructor(code, ...args) {
        super(buildMessage(code, args));
        this.code = code;
        Error.captureStackTrace(this, InterpreterError);
    }
    get name() {
        return `[${this.code}]`;
    }
}
export default InterpreterError;
function buildMessage(code, args) {
    const msg = messages[code];
    if (!msg)
        throw new Error(`No message associated with error code: ${code}.`);
    if (typeof msg === 'function')
        return msg(...args);
    if (!args?.length)
        return msg;
    args.unshift(msg);
    return String(...args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sUUFBUSxNQUFNLGVBQWUsQ0FBQztBQUVyQyxNQUFNLGdCQUE2RCxTQUFRLEtBQUs7SUFDNUUsSUFBSSxDQUFTO0lBQ2IsWUFBWSxJQUFPLEVBQUUsR0FBRyxJQUFvQztRQUN4RCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFFRCxlQUFlLGdCQUFnQixDQUFDO0FBRWhDLFNBQVMsWUFBWSxDQUFDLElBQXNDLEVBQUUsSUFBYztJQUN4RSxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0IsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzdFLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVTtRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFFOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixPQUFPLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZW5vLWxpbnQtaWdub3JlLWZpbGUgbm8tZXhwbGljaXQtYW55XHJcbmltcG9ydCBjb2RlcyBmcm9tIFwiLi9jb2Rlcy50c1wiO1xyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXMudHNcIjtcclxuXHJcbmNsYXNzIEludGVycHJldGVyRXJyb3I8QyBleHRlbmRzIHR5cGVvZiBjb2Rlc1trZXlvZiB0eXBlb2YgY29kZXNdPiBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IEMsIC4uLmFyZ3M6IFBhcmFtZXRlcnM8dHlwZW9mIG1lc3NhZ2VzW0NdPikge1xyXG4gICAgICAgIHN1cGVyKGJ1aWxkTWVzc2FnZShjb2RlLCBhcmdzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgSW50ZXJwcmV0ZXJFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLmNvZGV9XWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludGVycHJldGVyRXJyb3I7XHJcblxyXG5mdW5jdGlvbiBidWlsZE1lc3NhZ2UoY29kZTogdHlwZW9mIGNvZGVzW2tleW9mIHR5cGVvZiBjb2Rlc10sIGFyZ3M6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlc1tjb2RlXTtcclxuXHJcbiAgICBpZiAoIW1zZykgdGhyb3cgbmV3IEVycm9yKGBObyBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCBlcnJvciBjb2RlOiAke2NvZGV9LmApO1xyXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHJldHVybiBtc2coLi4uYXJncyk7XHJcbiAgICBpZiAoIWFyZ3M/Lmxlbmd0aCkgcmV0dXJuIG1zZztcclxuXHJcbiAgICBhcmdzLnVuc2hpZnQobXNnKTtcclxuICAgIHJldHVybiBTdHJpbmcoLi4uYXJncyk7XHJcbn0iXX0=