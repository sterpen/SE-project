import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    Day: String,
    First: String, 
    Second: String,
    Third: String, 
    Fourth: String, 
    Fifth: String,  
    tutorialGroup: {
        type: String, 
        default: 'A'
    },
    
}); 

const student= mongoose.model('student', studentSchema);
export default student;