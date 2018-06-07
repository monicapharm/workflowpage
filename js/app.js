var uri = "";
var contents = d3.json(uri);

// contents in each step 
var step1 = 'Step 1';
var step2 = 'Step 2';
var step3 = 'Step 3';
var step4 = 'Step 4';

// extra content in each step
var content1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptas natus totam";
var content2 = content1;
var content3 = content1;
var content4 = content1;

// more info in each step
var moreInfo1 = content1 + content2 + content4;
var moreInfo2 = moreInfo1 + moreInfo1 + moreInfo2;
var moreInfo3 = moreInfo2 + moreInfo2;
var moreInfo4 = content1 + moreInfo3 + moreInfo2;

// stepOne
var stepOne = d3.select('.step-one');
stepOne.html('').text(step1);
var contentOne = d3.select('.content-one');
d3.select('.one').on('mousemove', function () {
    contentOne.html('').classed('list-group-item', true).text(content1);
});
d3.select('.one').on('mouseout', function () {
    contentOne.html('').classed('list-group-item', false);
});
var moreInfoOne = d3.select(".more-info")
d3.select('.one').on('click', function () {
    contentOne.html('').classed('list-group-item', false);
    moreInfoOne.html('').classed('list-group-item border border-primary rounded', true).text(moreInfo1);
});

// stepTwo
var stepTwo = d3.select('.step-two');
stepTwo.html('').text(step2);
var contentTwo = d3.select('.content-two');
d3.select('.two').on('mousemove', function () {
    contentTwo.html('').classed('list-group-item', true).text(content2);
});
d3.select('.two').on('mouseout', function () {
    contentTwo.html('').classed('list-group-item', false);
});
var moreInfoTwo = d3.select(".more-info")
d3.select('.two').on('click', function () {
    contentTwo.html('').classed('list-group-item', false);
    moreInfoTwo.html('').classed('list-group-item border border-primary rounded', true).text(moreInfo2);
});

// stepThree
var stepThree = d3.select('.step-three');
stepThree.html('').text(step3);
var contentThree = d3.select('.content-three');
d3.select('.three').on('mousemove', function () {
    contentThree.html('').classed('list-group-item', true).text(content3);
});
d3.select('.three').on('mouseout', function () {
    contentThree.html('').classed('list-group-item', false);
});
var moreInfoThree = d3.select(".more-info")
d3.select('.three').on('click', function () {
    contentThree.html('').classed('list-group-item', false);
    moreInfoThree.html('').classed('list-group-item border border-primary rounded', true).text(moreInfo3);
});

// stepFour
var stepFour = d3.select('.step-four');
stepFour.html('').text(step4);
var contentFour = d3.select('.content-four');
d3.select('.four').on('mousemove', function () {
    contentFour.html('').classed('list-group-item', true).text(content4);
});
d3.select('.four').on('mouseout', function () {
    contentFour.html('').classed('list-group-item', false);
});
var moreInfoFour = d3.select(".more-info")
d3.select('.four').on('click', function () {
    contentFour.html('').classed('list-group-item', false);
    moreInfoFour.html('').classed('list-group-item border border-primary rounded', true).text(moreInfo2);
});

