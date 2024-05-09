//Question1
async function messageString(message,timedelay){
    await new Promise(resolve=>setTimeout(resolve,timedelay));
    console.log(message);
}
messageString("Good morning,3000");


//Question2
const UserId= [4,2,6,7];
async function getUserData(){
    for(const id of getUserData){
          try{
            const userData = await getUserData(id);
            console.log(userData)
        }
        catch(error){
            console.log(`Erro fetching data for user ${id}:${error}`);
        }
    }
}
getUserData();


//Question3
async function performTasks(){
    try {
        await performTasks();
        console.log("Task successful!");
      } catch (error) {
        console.log("Task failed:", error);
      }   
}
performTasks();

//Question4
function unstableTask(taskName,failureProbability){
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if ( randomNumber> failureProbability) {
          resolve(`The Task "${taskName}" succeeded`);
        } else {
          reject(new Error(`The Task "${taskName}" failed`));
        }
      });
 }
 async function executeWithRetry(taskName,retries,failureProbability){
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          await unstableTask(taskName, failureProbability);
          console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
          return;
        } catch (error) {
          console.error(`Attempt ${attempt}: ${error.message}`);
        }
      }
      console.log(`All ${retries} attempts failed for task "${taskName}"`);
    }
    executeWithRetry('Data Processing', 4, 0.2);
