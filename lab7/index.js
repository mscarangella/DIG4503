import Express from 'express';

const App = Express();
const port = 45030;

const names = [
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];

App.get('/people/:person', (req, res) => {
  let name = req.params.name;
  if (names.includes(name)) {
    res.json({ Name: name});
  } else {
    res.json({ Name: "Not Found"});
  }
})

App.get('/search/:name', (req, res) => {
  const name = names.filter(str => str.includes(req.params.name));
  if (result != 0){
    res.json({ search: [names]},);
  } else {
    res.json({ search: "Not Found"});
  }
})

App.listen(port, () => {

});