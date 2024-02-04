import  express  from "express";//module types async
//edit package.json   type:"module"
//express work is to serve on route

const app = express();

// if / route req come we send  response 'server is ready' 
app.get('/',(req,res) => {
    res.send('Server is ready')
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"first joke",
            content:"haha",
        },
        {
            id:2,
            title:"second joke",
            content:"hehe",
        },
        {
            id:3,
            title:"third joke",
            content:"hoho",
        },
        {
            id:4,
            title:"fourth joke",
            content:"hahahehehoho",
        },

    ];
    // Sending the jokes array as a JSON response
    res.send(jokes);
});


//if .env have port use it 
//else uuse port as 3000
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});


