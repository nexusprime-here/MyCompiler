import { Expression } from "@structures";
export class Identifier extends Expression {
    kind = 'Identifier';
    symbol;
    constructor(options) {
        super();
        this.symbol = options.symbol;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvRGVuby0xL2NvcmUvZXhwcmVzc2lvbnMvSWRlbnRpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxVQUFXLFNBQVEsVUFBVTtJQUN0QyxJQUFJLEdBQUcsWUFBcUIsQ0FBQztJQUM3QixNQUFNLENBQVM7SUFFZixZQUFZLE9BQWlDO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tIFwiQHN0cnVjdHVyZXNcIjtcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXIgZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAgICBraW5kID0gJ0lkZW50aWZpZXInIGFzIGNvbnN0O1xuICAgIHN5bWJvbDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogT21pdDxJZGVudGlmaWVyLCAna2luZCc+KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zeW1ib2wgPSBvcHRpb25zLnN5bWJvbDtcbiAgICB9XG59Il19