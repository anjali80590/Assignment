let Task=require('./models/Task')
let router=express.Router();



router.post('signup',async(req ,res)=>{
    try{
        let{name,password,email}=req.body;
        let hashed=await bycrypt(password,salt_rounds);
        let user=User.create({name,password,email:hasehd})
    }
})

// Basic Create without extra checks.
// Read all tasks with status and dueDate filters.
// Update one task by ID.
// Delete one task by ID.
// This New Example
// Create task only if title is unique.
// Read tasks with priority and isCompleted filters.
// Update task and set completionDate if marked completed.
// Delete multiple tasks by priority.

 

