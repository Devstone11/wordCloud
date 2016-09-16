function makeWordCloud(sentence) {
  var cloud = new Map();
  var wordArr = sentence.split(" ");
  wordArr.forEach(function(word) {
    var small = word.toLowerCase();
    if (cloud.get(small)) {
      cloud.set(small, cloud.get(small)+1);
    } else {
      cloud.set(small, 1);
    }
  })
  console.log(cloud);
}

makeWordCloud("hello my Hello name Is is hello");

String[3] arr;
