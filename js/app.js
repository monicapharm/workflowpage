var uri = "";
var contents = d3.json(uri);

// contents in each step 
var step1 = 'Step 1';
var step2 = 'Step 2';
var step3 = 'Step 3';
var step4 = 'Step 4';

// extra content in each step
var content1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus";
var content2 = content1;
var content3 = content1;
var content4 = content1;

// more info in each step
var moreInfo1 = content1 + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam, quibusdam dolor voluptatibus explicabo nobis quis cupiditate corrupti omnis a animi! Amet velit distinctio minima incidunt! Qui, corporis.";
var moreInfo2 = moreInfo1 + content1;
var moreInfo3 = moreInfo2 + content1;
var moreInfo4 = content1 + moreInfo3;

// stepOne
var stepOne = d3.select('.step-one');
stepOne.html('');
stepOne.text(step1);
var contentOne = d3.select('.content-one');
d3.select('.one').on('mousemove', function () {
    contentOne.html('');
    contentOne.classed('list-group-item', true);
    contentOne.text(content1);
});
d3.select('.one').on('mouseout', function () {
    contentOne.html('');
    contentOne.classed('list-group-item', false);
});
var moreInfoOne = d3.select(".more-info")
stepOne.on('click', function () {
    contentOne.html('');
    contentOne.classed('list-group-item', false);
    moreInfoOne.html('');
    moreInfoOne.classed('list-group-item border border-primary rounded', true);
    moreInfoOne.text(moreInfo1);
});

// stepTwo
var stepTwo = d3.select('.step-two');
stepTwo.html('');
stepTwo.text(step2);
var contentTwo = d3.select('.content-two');
d3.select('.two').on('mousemove', function () {
    contentTwo.html('');
    contentTwo.classed('list-group-item', true);
    contentTwo.text(content2);
});
d3.select('.two').on('mouseout', function () {
    contentTwo.html('');
    contentTwo.classed('list-group-item', false);
});
var moreInfoTwo = d3.select(".more-info")
stepTwo.on('click', function () {
    contentTwo.html('');
    contentTwo.classed('list-group-item', false);
    moreInfoTwo.html('');
    moreInfoTwo.classed('list-group-item border border-primary rounded', true);
    moreInfoTwo.text(moreInfo2);
});

// stepThree
var stepThree = d3.select('.step-three');
stepThree.html('');
stepThree.text(step3);
var contentThree = d3.select('.content-three');
d3.select('.three').on('mousemove', function () {
    contentThree.html('');
    contentThree.classed('list-group-item', true);
    contentThree.text(content3);
});
d3.select('.three').on('mouseout', function () {
    contentThree.html('');
    contentThree.classed('list-group-item', false);
});
var moreInfoThree = d3.select(".more-info")
stepThree.on('click', function () {
    contentThree.html('');
    contentThree.classed('list-group-item', false);
    moreInfoThree.html('');
    moreInfoThree.classed('list-group-item border border-primary rounded', true);
    moreInfoThree.text(moreInfo3);
});

// stepFour
var stepFour = d3.select('.step-four');
stepFour.html('');
stepFour.text(step4);
var contentFour = d3.select('.content-four');
d3.select('.four').on('mousemove', function () {
    contentFour.html('');
    contentFour.classed('list-group-item', true);
    contentFour.text(content4);
});
d3.select('.four').on('mouseout', function () {
    contentFour.html('');
    contentFour.classed('list-group-item', false);
});
var moreInfoFour = d3.select(".more-info")
stepFour.on('click', function () {
    contentFour.html('');
    contentFour.classed('list-group-item', false);
    moreInfoFour.html('');
    moreInfoFour.classed('list-group-item border border-primary rounded', true);
    moreInfoFour.text(moreInfo2);
});

