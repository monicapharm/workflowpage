/* dummy data */
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
var moreInfo1 = content1 + content1 + content1;
var moreInfo2 = moreInfo1 + moreInfo1;
var moreInfo3 = moreInfo1;
var moreInfo4 = moreInfo2 + moreInfo1;
// Data Sets
var exam1 = [
    { id: 1, student: 'Jade', grade: 275 },
    { id: 2, student: 'Billy', grade: 185 },
    { id: 3, student: 'Rose', grade: 290 },
    { id: 4, student: 'Avery', grade: 190 },
    { id: 5, student: 'Priya', grade: 85 },
    { id: 5, student: 'Andy', grade: 270 }
];
var exam2 = [
    { id: 5, student: 'Jake', grade: 140 },
    { id: 5, student: 'Fiona', grade: 220 },
    { id: 5, student: 'Jenny', grade: 100 },
    { id: 5, student: 'Jay', grade: 190 },
];
var exam3 = [
    { id: 2, student: 'Billy', grade: 185 },
    { id: 3, student: 'Rose', grade: 290 },
    { id: 4, student: 'Avery', grade: 190 },
    { id: 5, student: 'Priya', grade: 85 },
    { id: 5, student: 'Andy', grade: 270 }
];

/* ploting update */
var svg = d3.select('svg');
function update(newDataArray) {
    var rects = svg.selectAll('rect')
        .data(newDataArray, function (d) {
            return d.id;
        })
    var present = rects.enter()
        .append('rect')
        .attr('width', 0)
        .attr('fill', '#C5E4EA')
        .merge(rects);
    present
        .transition()
        .duration(500)
        .attr('x', 20)
        .attr('y', function (d, i) { return i * 40 + 20; })
        .attr('width', function (d) { return d.grade; })
        .attr('height', 30)
        .attr('color', '#C5E4EA')
        .attr('fill', '#48A0B5')

    var exiting = rects.exit();
    exiting
        .transition()
        .duration(500)
        .attr('width', 0)
        .remove()

    // update texts
    var texts = svg.selectAll('text').data(newDataArray, function (d) { return d.id })
    present = texts.enter().append('text')
        .merge(texts)

    present
        .transition().duration(500)
        .text(function (d) { return d.student + ": " + d.grade })
        .attr('fill', 'white')
        .attr('x', 25)
        .attr('y', function (d, i) { return 40 + i * 40 })

    texts.exit().remove()
}

/* button click visualization */
// stepOne
var stepOne = d3.select('.step-one');
stepOne.html('').text(step1);
var contentOne = d3.select('.content-one');
d3.select('.one').on('mousemove', function () {
    contentOne.html('').classed('list-group-item border border-info', true).text(content1);
});
d3.select('.one').on('mouseout', function () {
    contentOne.html('').classed('list-group-item border border-info', false);
});
var moreInfoOne = d3.select(".more-info")
d3.select('.one').on('click', function () {
    contentOne.html('').classed('list-group-item', false);
    moreInfoOne.html('')
        .classed('list-group-item list-group-item-info rounded', true)
        .text(moreInfo1);
    update(exam2);
});

// stepTwo
var stepTwo = d3.select('.step-two');
stepTwo.html('').text(step2);
var contentTwo = d3.select('.content-two');
d3.select('.two').on('mousemove', function () {
    contentTwo.html('').classed('list-group-item border border-info', true).text(content2);
});
d3.select('.two').on('mouseout', function () {
    contentTwo.html('').classed('list-group-item border border-info', false);
});
var moreInfoTwo = d3.select(".more-info")
d3.select('.two').on('click', function () {
    contentTwo.html('').classed('list-group-item', false);
    moreInfoTwo.html('').classed('list-group-item list-group-item-info rounded', true).text(moreInfo2);
    update(exam3);
});

// stepThree
var stepThree = d3.select('.step-three');
stepThree.html('').text(step3);
var contentThree = d3.select('.content-three');
d3.select('.three').on('mousemove', function () {
    contentThree.html('').classed('list-group-item border border-info', true).text(content3);
});
d3.select('.three').on('mouseout', function () {
    contentThree.html('').classed('list-group-item border border-info', false);
});
var moreInfoThree = d3.select(".more-info")
d3.select('.three').on('click', function () {
    contentThree.html('').classed('list-group-item', false);
    moreInfoThree.html('').classed('list-group-item list-group-item-info rounded', true).text(moreInfo3);
    update(exam1);
});

// stepFour
var stepFour = d3.select('.step-four');
stepFour.html('').text(step4);
var contentFour = d3.select('.content-four');
d3.select('.four').on('mousemove', function () {
    contentFour.html('').classed('list-group-item border border-info', true).text(content4);
});
d3.select('.four').on('mouseout', function () {
    contentFour.html('').classed('list-group-item border border-info', false);
});
var moreInfoFour = d3.select(".more-info")
d3.select('.four').on('click', function () {
    contentFour.html('').classed('list-group-item', false);
    moreInfoFour.html('').classed('list-group-item list-group-item-info rounded', true).text(moreInfo2);
    update(exam3);
});
