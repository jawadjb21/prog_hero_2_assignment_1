const multiplyValue = (multiplicand: number, multiplier: number = 2): number => {
    return multiplicand * multiplier;
}

type Input = string | number | boolean;
const processInput = (input: Input): string | number => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}

type Coordinate = readonly [number, number, string];
const formatCoordinate = (coordinate: Coordinate): string => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}


const concatenateArrays = <T>(...arrays: T[]): object => {
    return arrays.reduce((newArr: T[], currentArr) => newArr.concat(currentArr), []);
}


interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

const getPopularCourses = (courses: Course[], minStudents: number): object => {
    let popularCourses: object[] = [];
    courses.map(course => course.isPublished && course.students >= minStudents && popularCourses.push(course));
    return popularCourses;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): object => {
    let newArr: T[K][] = [];
    items.map(item => newArr.push(item[key]))
    return newArr;
}

class Employee {
    protected name: string;
    private _baseSalary: number;

    constructor(name: string, _baseSalary: number) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }

    get baseSalary() {
        return this._baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private _department: string;
    constructor(name: string, _baseSalary: number, _department: string) {
        super(name, _baseSalary);

        this._department = _department;
    }
    get department() {
        return this._department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};