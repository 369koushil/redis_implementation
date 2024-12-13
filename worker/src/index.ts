import { createClient } from "redis";
const client=createClient();
async function main(){
    try{
        await client.connect();

    while(1){
        const response=await client.brPop("submission",0);
        console.log(response);

    }
    }catch(err){
        console.log(err);
    }
}

main()