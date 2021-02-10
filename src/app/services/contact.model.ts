export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '',public coins:number=100, public moves=[]) {
    }
    
    setId?() {
        // Implement your own set Id
        this._id = Math.random().toString()
    }
}