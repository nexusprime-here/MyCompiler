import { Parser, Runtime, Tokenizer } from '@core/stages/mod.ts';
console.log('\nMathpreter v0.1');
while (true) {
    const input = prompt('> ');
    if (!input)
        continue;
    if (input === '.exit') {
        Deno.exit(1);
    }
    try {
        const tokens = new Tokenizer(input).returns;
        const program = new Parser(tokens).returns;
        const result = new Runtime(program).returns;
        console.log(result?.value);
    }
    catch (e) {
        console.error(e);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9ob21lL3J1bm5lci9EZW5vLTEvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUVoRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakMsT0FBTSxJQUFJLEVBQUU7SUFDUixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsSUFBRyxDQUFDLEtBQUs7UUFBRSxTQUFTO0lBRXBCLElBQUcsS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBRUQsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBQUMsT0FBTSxDQUFDLEVBQUU7UUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJzZXIsIFJ1bnRpbWUsIFRva2VuaXplciB9IGZyb20gJ0Bjb3JlL3N0YWdlcy9tb2QudHMnXG5cbmNvbnNvbGUubG9nKCdcXG5NYXRocHJldGVyIHYwLjEnKTtcblxud2hpbGUodHJ1ZSkge1xuICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0KCc+ICcpO1xuICAgIGlmKCFpbnB1dCkgY29udGludWU7XG5cbiAgICBpZihpbnB1dCA9PT0gJy5leGl0Jykge1xuICAgICAgICBEZW5vLmV4aXQoMSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gbmV3IFRva2VuaXplcihpbnB1dCkucmV0dXJucztcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IG5ldyBQYXJzZXIodG9rZW5zKS5yZXR1cm5zO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUnVudGltZShwcm9ncmFtKS5yZXR1cm5zOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdD8udmFsdWUpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn0iXX0=