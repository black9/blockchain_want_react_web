

export async function sendtobc (userUid,eventDate){

      let url ="http://34.84.235.122:3000/api/Board";
    
       let today = new Date();
    
       const body={
    
      $class: "com.betweak.carauction.Board",

      created: today,

     hostUid: `${userUid}`,
    
       date: `${eventDate}`
    
    
      };
    
      console.log(JSON.stringify(body));
    
     
    
       const response = await fetch(url,{
    
       method:"POST",
    
         headers:{
    
           Accept:"application/json",
    
           "Content-Type": "application/json"
    
     
    
         },
    
         body:JSON.stringify(body)
    
       });
    
    
       if (response.ok) {
    
        console.log(response);
    
         return response.json();
    
     
    
      }
    
        return false
    
        
    
     
    
     
    
     }