import InterpreterError from "@errors";
import { comparativeOperators, multiplicitateOperators } from "../constants/Operators.ts";
export class Runtime {
    returns;
    evaluate(astNode) {
        switch (astNode.kind) {
            case 'NumberLiteral': {
                return {
                    type: 'number',
                    value: astNode.value
                };
            }
            case 'StringLiteral': {
                return {
                    type: 'string',
                    value: astNode.value
                };
            }
            case 'BooleanLiteral': {
                return {
                    type: 'boolean',
                    value: astNode.value
                };
            }
            case "NullLiteral": {
                return { value: "null", type: "null" };
            }
            case "BinaryExpression": {
                const binOperation = astNode;
                const lhs = this.evaluate(binOperation.left);
                const rhs = this.evaluate(binOperation.right);
                return this.evalBinaryExpression(lhs, rhs, binOperation.operator);
            }
            case "Program": {
                let lastEvaluated = { type: "null", value: "null" };
                for (const statement of astNode.body) {
                    lastEvaluated = this.evaluate(statement);
                }
                return lastEvaluated;
            }
            default: {
                throw new InterpreterError('RuntimeError', astNode.kind);
            }
        }
    }
    evalBinaryExpression(lhs, rhs, operator) {
        let result;
        if (!comparativeOperators.includes(operator)) {
            if (lhs.type !== "number" && rhs.type !== "number") {
                throw new InterpreterError('TypeError');
            }
        }
        if (multiplicitateOperators.includes(operator)) {
            if ([lhs.value, rhs.value].includes(0)) {
                throw new InterpreterError('ZeroDivisionError');
            }
        }
        result = eval(`${lhs.value} ${operator} ${rhs.value}`);
        return {
            type: 'number',
            value: result
        };
    }
    constructor(astNode) {
        this.returns = this.evaluate(astNode);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDMtUnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjAzLVJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxnQkFBZ0IsTUFBTSxTQUFTLENBQUM7QUFFdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFZMUYsTUFBTSxPQUFPLE9BQU87SUFDaEIsT0FBTyxDQUFDO0lBRUEsUUFBUSxDQUFDLE9BQWtCO1FBQy9CLFFBQU8sT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLGVBQWUsQ0FBQyxDQUFDO2dCQUNsQixPQUFPO29CQUNILElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRyxPQUF5QixDQUFDLEtBQUs7aUJBQzFDLENBQUM7YUFDTDtZQUNELEtBQUssZUFBZSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU87b0JBQ0gsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFHLE9BQXlCLENBQUMsS0FBSztpQkFDMUMsQ0FBQTthQUNKO1lBQ0QsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuQixPQUFPO29CQUNILElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRyxPQUEwQixDQUFDLEtBQUs7aUJBQzNDLENBQUE7YUFDSjtZQUNELEtBQUssYUFBYSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUMxQztZQUNELEtBQUssa0JBQWtCLENBQUMsQ0FBQztnQkFDckIsTUFBTSxZQUFZLEdBQUcsT0FBMkIsQ0FBQztnQkFFakQsTUFBTSxHQUFHLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sR0FBRyxHQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV6RCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FDOUIsR0FBRyxFQUNILEdBQUcsRUFDSCxZQUFZLENBQUMsUUFBUSxDQUN0QixDQUFDO2FBQ0w7WUFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUNaLElBQUksYUFBYSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3BELEtBQUssTUFBTSxTQUFTLElBQUssT0FBbUIsQ0FBQyxJQUFJLEVBQUU7b0JBQy9DLGFBQWEsR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxPQUFPLGFBQWEsQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxDQUFDO2dCQUNMLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7SUFDTCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxRQUFnQjtRQUMzRSxJQUFJLE1BQWMsQ0FBQztRQUVuQixJQUFHLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQztTQUNKO1FBRUQsSUFBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsSUFBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUVELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUV2RCxPQUFPO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQUUsTUFBTTtTQUNGLENBQUE7SUFDbkIsQ0FBQztJQUVELFlBQVksT0FBa0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbmFyeUV4cHJlc3Npb24sIEJvb2xlYW5MaXRlcmFsLCBOdW1iZXJMaXRlcmFsLCBTdHJpbmdMaXRlcmFsIH0gZnJvbSBcIkBleHByZXNzaW9uc1wiO1xuaW1wb3J0IHsgU3RhdGVtZW50IH0gZnJvbSBcIkBzdHJ1Y3R1cmVzXCI7XG5pbXBvcnQgSW50ZXJwcmV0ZXJFcnJvciBmcm9tIFwiQGVycm9yc1wiO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gXCIuLzAyLVBhcnNlci50c1wiO1xuaW1wb3J0IHsgY29tcGFyYXRpdmVPcGVyYXRvcnMsIG11bHRpcGxpY2l0YXRlT3BlcmF0b3JzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9PcGVyYXRvcnMudHNcIjtcblxuaW50ZXJmYWNlIFJ1bnRpbWVWYWwge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55XG59XG5cbmludGVyZmFjZSBOdW1iZXJWYWwgZXh0ZW5kcyBSdW50aW1lVmFsIHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICB2YWx1ZTogbnVtYmVyXG59IFxuXG5leHBvcnQgY2xhc3MgUnVudGltZSB7XG4gICAgcmV0dXJucztcblxuICAgIHByaXZhdGUgZXZhbHVhdGUoYXN0Tm9kZTogU3RhdGVtZW50KTogUnVudGltZVZhbCB7XG4gICAgICAgIHN3aXRjaChhc3ROb2RlLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ051bWJlckxpdGVyYWwnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoYXN0Tm9kZSBhcyBOdW1iZXJMaXRlcmFsKS52YWx1ZSBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nTGl0ZXJhbCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChhc3ROb2RlIGFzIFN0cmluZ0xpdGVyYWwpLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbkxpdGVyYWwnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKGFzdE5vZGUgYXMgQm9vbGVhbkxpdGVyYWwpLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIk51bGxMaXRlcmFsXCI6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogXCJudWxsXCIsIHR5cGU6IFwibnVsbFwiIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiQmluYXJ5RXhwcmVzc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmluT3BlcmF0aW9uID0gYXN0Tm9kZSBhcyBCaW5hcnlFeHByZXNzaW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGhzID0gPE51bWJlclZhbD50aGlzLmV2YWx1YXRlKGJpbk9wZXJhdGlvbi5sZWZ0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByaHMgPSA8TnVtYmVyVmFsPnRoaXMuZXZhbHVhdGUoYmluT3BlcmF0aW9uLnJpZ2h0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsQmluYXJ5RXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIGxocyxcbiAgICAgICAgICAgICAgICAgIHJocyxcbiAgICAgICAgICAgICAgICAgIGJpbk9wZXJhdGlvbi5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIlByb2dyYW1cIjoge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0RXZhbHVhdGVkID0geyB0eXBlOiBcIm51bGxcIiwgdmFsdWU6IFwibnVsbFwiIH07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdGF0ZW1lbnQgb2YgKGFzdE5vZGUgYXMgUHJvZ3JhbSkuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0RXZhbHVhdGVkID0gPGFueT50aGlzLmV2YWx1YXRlKHN0YXRlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0RXZhbHVhdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnRlcnByZXRlckVycm9yKCdSdW50aW1lRXJyb3InLCBhc3ROb2RlLmtpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBldmFsQmluYXJ5RXhwcmVzc2lvbihsaHM6IFJ1bnRpbWVWYWwsIHJoczogUnVudGltZVZhbCwgb3BlcmF0b3I6IHN0cmluZykge1xuICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXI7XG5cbiAgICAgICAgaWYoIWNvbXBhcmF0aXZlT3BlcmF0b3JzLmluY2x1ZGVzKG9wZXJhdG9yKSkge1xuICAgICAgICAgICAgaWYgKGxocy50eXBlICE9PSBcIm51bWJlclwiICYmIHJocy50eXBlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludGVycHJldGVyRXJyb3IoJ1R5cGVFcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobXVsdGlwbGljaXRhdGVPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IpKSB7XG4gICAgICAgICAgICBpZihbbGhzLnZhbHVlLCByaHMudmFsdWVdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludGVycHJldGVyRXJyb3IoJ1plcm9EaXZpc2lvbkVycm9yJyk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gZXZhbChgJHtsaHMudmFsdWV9ICR7b3BlcmF0b3J9ICR7cmhzLnZhbHVlfWApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhbHVlOiByZXN1bHRcbiAgICAgICAgfSBhcyBSdW50aW1lVmFsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXN0Tm9kZTogU3RhdGVtZW50KSB7XG4gICAgICAgIHRoaXMucmV0dXJucyA9IHRoaXMuZXZhbHVhdGUoYXN0Tm9kZSk7XG4gICAgfVxufSJdfQ==