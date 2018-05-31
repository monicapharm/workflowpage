const uri = "";
var contents = d3.json(uri);

// steps' content
var step1 = 'Step 1';
var step2 = 'Step 2';
var step3 = 'Step 3';
var step4 = 'Step 4';

var stepOne = d3.select('.step-one');
stepOne.html('');
stepOne.text(step1);

var stepTwo = d3.select('.step-two');
stepTwo.html('');
stepTwo.text(step2);

var stepThree = d3.select('.step-three');
stepThree.html('');
stepThree.text(step3);

var stepFour = d3.select('.step-four');
stepFour.html('');
stepFour.text(step4);

// extra content 
// var content1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus";
// var content2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus";
// var content3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus";
// var content4 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus";

// var contentOne = d3.select('.content-one');
// contentOne.html('');
// contentOne.text(content1);

// var contentTwo = d3.select('.content-two');
// contentTwo.html('');
// contentTwo.text(content2);

// var contentThree = d3.select('.content-three');
// contentThree.html('');
// contentThree.text(content3);

// var contentFour = d3.select('.content-four');
// contentFour.html('');
// contentFour.text(content4);