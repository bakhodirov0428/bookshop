let cards = document.querySelector(".cards");
let all = document.querySelector("#all");
let expensive = document.querySelector("#expensive");
let cheep = document.querySelector("#cheep");
let middle = document.querySelector("#middle");
let button = document.querySelector(".search-button");
let minBtn = document.querySelector(".min-button");
let maxBtn = document.querySelector(".max-button");
let search = document.querySelector("#search-input");
let input = document.querySelector('.filter-input');



render(data);

function render(e) {
  var forreach = e.map((i) => {
    return `
   <div class="card">
  <h2 class="card-label menu-title">Books</h2>
  <div class="card-info">
      <h3 class="card-title">
          ${i.title}
      </h3>
      <p class="card-desc">
      ${i.description}
      </p>
      <p class="card-prize">
          Price : <span>${i.price}</span> so'm
      </p>
  </div>
</div>
  `
  })
  cards.innerHTML = forreach;
}
all.addEventListener('click', function () {
  render(data)
});
var expensiveArr = [];
expensive.addEventListener('click', function () {
  data.forEach((i) => {
    if (i.status == 'expensive' && !expensiveArr.includes(i)) {
      expensiveArr.push(i)
    }
  })
render(expensiveArr)
});
let cheepArr = [];
cheep.addEventListener("click",function(){
  data.forEach((i) => {
    if (i.status == 'cheep' && !cheepArr.includes(i)) {
      cheepArr.push(i)
    }
  });
render(cheepArr)
})
let middleArr = [];
middle.addEventListener('click',function(){
  data.forEach((i) => {
    if (i.status == 'middle' && !middleArr.includes(i)) {
      middleArr.push(i)
    }
  })
render(middleArr)
});
var min = []
function minF(arg) {
  data.forEach((i) => {
    if (arg >= i.price && !min.includes(i)) {
      min.push(i)
    }
  })
  render(min)

}
var max = []
function maxF(arg) {
  data.forEach((i) => {
    if (arg <= i.price && !max.includes(i)) {
      max.push(i)
    }
  })
  render(max)
}

minBtn.addEventListener('click', () => {
  minF(input.value)
})

maxBtn.addEventListener('click', () => {
  maxF(input.value)
});

