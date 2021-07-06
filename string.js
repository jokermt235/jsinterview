var subject = "Mutalip";
var str = `Hello, ${subject}`;

const parse = (strings,...values)=>{
    console.log(strings, values);
    return `${strings[0]}`
}

var dateStr = parse`Hello Im ${new Date().getFullYear() }  years old` ;

console.log(dateStr);

