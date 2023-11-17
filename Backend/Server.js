const ethers = require('ethers');
const { env } = require('process');
const app = require('express')();
const EndPointProvider = `https://prettiest-nameless-fire.matic-testnet.quiknode.pro/${env}/`;
const ClientAuthItem = "0x03A59762b0F989e736f9547959BA6A3AB074Cde0"; 
const acc = "0xa26df31e54699802949096a39eA57B390B59d5Ec";``
const abi = require('./ABI.json');

app.get('/',async (req,res) =>{

    const Provider = new ethers.JsonRpcProvider(EndPointProvider);
    const Contract = new ethers.Contract(ClientAuthItem,abi,Provider);

    
    try {

       const name = await Contract.name();
       const sym  = await Contract.symbol();
        res.status(200).json({
            "name": name,
            "symbol": sym
        })

    } catch (error) {
        console.log("Error in fetching the Home Page",error)
    }
});

app.get('/about',(req,res) =>{

    res.write('Home Page',() =>{
        console.log("User hits About page");
    });
});

app.listen(3000, () => console.log('Server is running....'));