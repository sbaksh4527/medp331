let btn = document.getElementById('btn');
let output = document.getElementById('output');
let poems = 
[
	'"You fit into me, like a hook into an eye, a fish hook, an open eye"',
	'"My life has been the poem I would have writ, But I could not both live and utter it."',
	'"No man is an island, Entire of itself, Every man is a piece of the continent, A part of the main. If a clod be washed away by the sea, Europe is the less. As well as if a promontory were. As well as if a manor of thy friend’s Or of thine own were: Any man’s death diminishes me, Because I am involved in mankind, And therefore never send to know for whom the bell tolls; It tolls for thee."',
	'"Whose woods these are I think I know. His house is in the village though; He will not see me stopping here To watch his woods fill up with snow. My little horse must think it queer To stop without a farmhouse near Between the woods and frozen lake The darkest evening of the year."',
];

btn.addEventListener('click', function(){
var randomPoem = poems[Math.floor(Math.random() * poems.length)]
output.innerHTML = randomPoem;
})