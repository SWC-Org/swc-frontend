import {Schema,model,models} from 'mongoose'

const UserSchema :Schema = new Schema({
    email:{
        type:String,
        unique :[true,"Email Already exists"],
        required :[true,"Email is required"]
    },
    first_name:{
        type:String,
        required :[true,"Frist Name is required"]
    },
    last_name:{
        type:String,
        required :[true,"Last Name is required"]
    },
    password:{
        type:String,
        required :[true,"Password is required"]
    },
    image:{
        type:String
    },
    role:{
        type:String,
        required :[true,"Role is required"]
    },
    policy:{
        type:String,
        required :[true,"Policy is required"]
    },
    auth :{
        type:String,
        required :[true,"Auth is required"]
    }
});

const User = models.User || model('User',UserSchema);

export default User