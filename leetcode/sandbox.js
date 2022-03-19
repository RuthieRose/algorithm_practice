class Out {
 print(data) {
     process.stdout.write(data)
 }
 println(data) {
     process.stdout.write(`${data}\n`)
 }
}

class System {
 static out = new Out()
}

System.out.println("Hello World!")