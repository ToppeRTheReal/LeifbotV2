"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._store = Array();
    }
    Push(value) {
        this._store.push(value);
    }
    Pop() {
        return this._store.shift();
    }
    GetLength() {
        return this._store.length;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZXMvUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxLQUFLO0lBQWxCO1FBQ1ksV0FBTSxHQUFRLEtBQUssRUFBSyxDQUFDO0lBYXJDLENBQUM7SUFYRyxJQUFJLENBQUMsS0FBUTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFkRCxzQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRdWV1ZTxUPiB7XG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRbXSA9IEFycmF5PFQ+KCk7XG4gICAgXG4gICAgUHVzaCh2YWx1ZTogVCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RvcmUucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgUG9wKCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBHZXRMZW5ndGgoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5sZW5ndGg7XG4gICAgfVxufSAiXX0=