import Express from 'express';
const App = Express();
const port = 3020;

//dynamic route 1
App.get('people/:id', (req, res) => {
  res.send();
});

App.listen(port, () => {

});

//dynamic route 2
App.get('/things/:id([0-9]{5})', function(req, res){
  res.send('id: ' + req.params.id);
});

App.listen(port, () => {

});