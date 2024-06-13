const path=require("path");

console.log(path.sep);// This is basically used to separate the path file like if the name of the folder and then the file and then path like that using /

const filename=path.join('/good-boys-folder/','good-things','game-pro')

console.log(filename);
/* output:
    \good-boys-folder\mad-man\game-pro

    Explanation:
        This is used to join theh path that we given for example in the above output the good-boys-folder is the folder and the subfolder in that is mad-man
        and the file is game-pro this is basically is  used to join that together provide the path 
*/

const basename_of_folder=path.basename(filename)
console.log(basename_of_folder)
/* output:
        game-pro
    explanation:
        this is used to provide the base path of the folder or the link easy bro
*/

if(req.url==='/')
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