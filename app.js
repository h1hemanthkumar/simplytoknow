const https=require('http');

const server=https.createServer((req,res)=>
{   if(req.url==='/')
    {   res.write('hello Your are in home page');
        res.end();
    }
    else if(req.url==='/about')
    {   res.write('<h1>hello Your are in about page<h1><a href="/">go back to home</a>');
        res.end();
    }
    else
    {   res.write('<h1>Oops ur in the wrong page i guess</h1><a href="/">go back to home</a>');
        res.end();
    }
})

server.listen(2000);

/*
    it is like if u ask for the particular url like localhost:2000 it will open the home page written with some not if ast for the local host:2000/about
    then it will open the about page and then it will open the page that is not valid like last else statement will be executed
 */