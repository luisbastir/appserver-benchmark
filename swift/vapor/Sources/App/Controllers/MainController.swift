import Vapor

/// Controls basic CRUD operations on `Todo`s.
final class MainController {
    /// Returns a list of all `Todo`s.
    /*func index(_ req: Request) throws -> Future<[Todo]> {
        return Todo.query(on: req).all()
    }

    /// Saves a decoded `Todo` to the database.
    func create(_ req: Request) throws -> Future<Todo> {
        return try req.content.decode(Todo.self).flatMap { todo in
            return todo.save(on: req)
        }
    }

    /// Deletes a parameterized `Todo`.
    func delete(_ req: Request) throws -> Future<HTTPStatus> {
        return try req.parameters.next(Todo.self).flatMap { todo in
            return todo.delete(on: req)
        }.transform(to: .ok)
    }*/

    func hello(_ req: Request) throws -> HelloWorldResponse {
        return HelloWorldResponse(message: "Hello World!")
    }

    func list(_ req: Request) throws -> [ListResponse] {
        var arr: [ListResponse] = []
        for x in 0...500 {
            let item = ListResponse(index: x, message: "Item \(x+1) with index \(x)")
            arr.append(item)
        }
        return arr
    }

    func fibonacci(_ req: Request) throws -> [Int] {
        var arr: [Int] = []
        for x in 0...90 {
            arr.append(self.fib(x))
        }
        return arr
    }

    private func fib(_ num: Int) -> Int {
        if num == 0 {
            return 0
        }
        var x = 2
        var sequence: [Int] = [1,1]
        while x < num {
            sequence.append(sequence[x-1] + sequence[x-2])
            x += 1
        }
        return sequence[x-1]
    }
}

struct HelloWorldResponse: Content {
    var message: String
}

struct ListResponse: Content {
    var index: Int
    var message: String
}
