const moduleStats = {
    module1: {
        moduleName: 'Learn JS',
        studentsEnrolled: 2340,
        studentsCompleted: 2210
    },
    module2: {
        moduleName: 'CSS Basics',
        studentsEnrolled: 1893,
        studentsCompleted: 1810
    },
    module3: {
        moduleName: 'Responsive Design',
        studentsEnrolled: 4600,
        studentsCompleted: 4357
    }
}

class Module {
    constructor(data){
        Object.assign(this, data) 
        // copy data object to this. this is a copy of the
        // object coming in as a data parameter
        this.percentCompletedModule = this.studentsCompleted / this.studentsEnrolled * 100
    }
    logPercentCompletedModule(){
        console.log(this.percentCompletedModule)
    }
}

const responsiveDesign = new Module(moduleStats.module3)
responsiveDesign.logPercentCompletedModule()