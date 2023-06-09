import express from "express";



//PUT /articles/learn-react/upvote

let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments: [],

}, {
    name : 'learn-node',
    upvotes: 0,
    comments: [],

} , {
    name : 'mongodb',
    upvotes: 0,
    comments: [],

}]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req,res) => {
    const {name} = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if(article){
        article.upvotes += 1
        res.send(`the ${name} article now has ${article.upvotes} upvotes !!!!!!!!!!!!!!!`)    
    } else {
        res.send('The article doesn\'t exist')
    }
    
})

app.post('/api/articles/:name/comments', (req, res) => {
    const {name} = req.params;
    const {postedBy, text} = req.body;

    const article = articlesInfo.find(a => a.name === name);

    if(article){
        article.comments.push({postedBy, text})
        res.send(article.comments)
    } else {
        res.send('The article doesn\'t exist')
    }
    


})





// app.post('/hello', (req, res) => {
//     console.log(req.body)
//     res.send(`Hello ${req.body.name}`)
// }
// );

// app.get('/hello/:name', (req, res) => {
// const {name} = req.params
// res.send(`Hello ${name}`)
// })
app.listen(8000, () => {
    console.log('server is listening on port 8000')
})