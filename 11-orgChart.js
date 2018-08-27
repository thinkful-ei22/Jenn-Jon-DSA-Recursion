// Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy.

const facebookHierarchy = [
  {id:'Zuckerberg', boss: null},
  {id:'Schrepher', boss:'Zuckerberg'},
  {id:'Schrage', boss:'Zuckerberg'},
  {id:'Sandberg', boss:'Zuckerberg'},
  {id:'Bosworth', boss:'Schrepher' },
  {id:'Zhao', boss:'Schrepher'},
  {id:'VanDyck', boss:'Schrage'},
  {id:'Swain', boss:'Schrage'},
  {id:'Goler', boss:'Sandberg'},
  {id:'Hernandez', boss:'Sandberg'},
  {id:'Moissinac', boss:'Sandberg'},
  {id:'Kelley', boss:'Sandberg'},
  {id:'Steve', boss:'Bosworth'},
  {id:'Kyle', boss:'Bosworth'},
  {id:'Andra', boss:'Bosworth'},
  {id:'Richie', boss:'Zhao'},
  {id:'Sofia', boss:'Zhao'},
  {id:'Jen', boss:'Zhao'},
  {id:'Sabrina', boss:'VanDyck'},
  {id:'Michelle', boss:'VanDyck'},
  {id:'Josh', boss:'VanDyck'},
  {id:'Blanch', boss:'Swain'},
  {id:'Tom', boss:'Swain'},
  {id:'Joe', boss:'Swain'},
  {id:'Eddie', boss:'Goler'},
  {id:'Julie', boss:'Goler'},
  {id:'Annie', boss:'Goler'},
  {id:'Rowi', boss:'Hernandez'},
  {id:'Inga', boss:'Hernandez'},
  {id:'Morgan', boss:'Hernandez'},
  {id:'Amy', boss:'Moissinac'},
  {id:'Chuck', boss:'Moissinac'},
  {id:'Vinni', boss:'Moissinac'},
  {id:'Eric', boss:'Kelley'},
  {id:'Ana', boss:'Kelley'},
  {id:'Wes', boss:'Kelley'},
];

// ==============================
function traverse(facebookHierarchy, boss) {
  let node = {};
  facebookHierarchy.filter(item => item.boss === boss)
    .forEach(item => node[item.id] = traverse(facebookHierarchy, item.id));
  return node;  
}
console.log(JSON.stringify(traverse(facebookHierarchy, null), null, 2));