
let cnt = 0;
let TodoData = [
  {
    id: cnt,
    like: 5,
    dislike: 6,
    text: "Add the text in the todo list",
  },

]

let dom = 0;
let domArr = [];
function printData() {
  let addcontainer = document.getElementById('add-todo-container');
  let innerMainContainer = document.createElement('div');
  let buttonContainer = document.createElement('div');
  let likeThumbsup = document.createElement('img');
  likeThumbsup.setAttribute('class', 'thumbs-up');
  let dislikeThumbsdown = document.createElement('img');
  dislikeThumbsdown.setAttribute('class', 'thumbs-down');
  likeThumbsup.src = "Assets/thumbs-up.png";
  dislikeThumbsdown.src = "Assets/thumbs-down.png";
  let likevalue = document.createElement('span');
  likevalue.setAttribute('class', 'like-value')
  let dislikevalue = document.createElement('span');
  dislikevalue.setAttribute('class', 'dislike-value');
  buttonContainer.setAttribute('class', 'btn-container');
  innerMainContainer.setAttribute('class', 'inner-container');
  let likebtn = document.createElement('button');
  let dislikebtn = document.createElement('button');


  likebtn.addEventListener('click', function () {
    if (TodoData[0].like === 5 && TodoData[0].dislike === 6) {
      TodoData[0].like = TodoData[0].like + 1;
      likevalue.textContent = TodoData[0].like;
      TodoData[0].dislike = TodoData[0].dislike - 1;
      dislikevalue.textContent = TodoData[0].dislike;


    }
    else if (TodoData[0].like === 6 && TodoData[0].dislike === 5) {
      TodoData[0].like = TodoData[0].like - 1;
      likevalue.textContent = TodoData[0].like;
      TodoData[0].dislike = TodoData[0].dislike + 1;
      dislikevalue.textContent = TodoData[0].dislike;


    }

  });

  dislikebtn.addEventListener('click', function () {
    if (TodoData[0].like === 5 && TodoData[0].dislike === 6) {
      TodoData[0].like = TodoData[0].like + 1;
      likevalue.textContent = TodoData[0].like;
      TodoData[0].dislike = TodoData[0].dislike - 1;
      dislikevalue.textContent = TodoData[0].dislike;


    }
    else if (TodoData[0].like === 6 && TodoData[0].dislike === 5) {
      TodoData[0].like = TodoData[0].like - 1;
      likevalue.textContent = TodoData[0].like;
      TodoData[0].dislike = TodoData[0].dislike + 1;
      dislikevalue.textContent = TodoData[0].dislike;


    }
  })
  likebtn.setAttribute('class', 'btn');
  likebtn.setAttribute('id', 'like-btn');
  likebtn.appendChild(likeThumbsup);
  likebtn.appendChild(likevalue);
  dislikebtn.setAttribute('class', 'btn');
  dislikebtn.setAttribute('id', 'dislike-btn');
  dislikebtn.appendChild(dislikeThumbsdown);
  dislikebtn.appendChild(dislikevalue);
  let defaultText = document.createElement('span');
  defaultText.setAttribute('class', 'text');
  likevalue.textContent = TodoData[0].like;
  dislikevalue.textContent = TodoData[0].dislike;
  defaultText.textContent = TodoData[0].text;
  buttonContainer.appendChild(likebtn);
  buttonContainer.appendChild(dislikebtn);
  innerMainContainer.appendChild(buttonContainer);
  innerMainContainer.appendChild(defaultText);
  addcontainer.appendChild(innerMainContainer);
}
printData();


function SortTodo(TodoData) {
  TodoData = TodoData.sort((a, b) => (a.like < b.dislike) ? 1 : (a.like > b.like) ? -1 : 0);
  return TodoData;
}
function addTodo() {

  cnt++;
  const paginationNumbers = document.getElementById("pagination-numbers");
  const paginatedList = document.getElementById("add-todo-container");
  let innerMainContainer = document.createElement('li');
  let innerContainer = document.createElement('div');
  let removeContainer = document.createElement('div');
  innerContainer.setAttribute('class', 'inner-container');
  innerContainer.setAttribute('id', `inner-container-${cnt}`);
  innerMainContainer.setAttribute('class', 'inner-main-container')
  let buttonContainer = document.createElement('div');
  let inputField = document.getElementById('my-input').value;
  buttonContainer.setAttribute('class', 'btn-container');
  let likeThumbsup = document.createElement('img');
  let likevalue = document.createElement('span');
  likevalue.setAttribute('id', `like-value-${cnt}`)
  let dislikevalue = document.createElement('span');
  dislikevalue.setAttribute('id', `dislike-value-${cnt}`)
  likeThumbsup.setAttribute('class', 'thumbs-up');
  likeThumbsup.src = "Assets/thumbs-up.png"
  let dislikeThumbsdown = document.createElement('img');
  dislikeThumbsdown.setAttribute('class', 'thumbs-down')
  likeThumbsup.src = "Assets/thumbs-up.png";
  dislikeThumbsdown.src = "Assets/thumbs-down.png"
  let likebtn = document.createElement('button');
  let inputText = document.createElement('span');
  let removebtn = document.createElement('button');
  removebtn.setAttribute('class', 'remove-btn');
  removebtn.setAttribute('id', `remove-btn-${cnt}`);
  removebtn.innerText = "Remove";
  inputText.setAttribute('class', 'text');
  inputText.setAttribute('id', `text-${cnt}`);
  inputText.textContent = inputField;
  likebtn.setAttribute('class', 'btn');
  likebtn.setAttribute('id', `like-btn-${cnt}`);
  likebtn.appendChild(likeThumbsup);
  likebtn.appendChild(likevalue);
  let dislikebtn = document.createElement('button');
  dislikebtn.appendChild(dislikeThumbsdown);
  dislikebtn.appendChild(dislikevalue);
  dislikebtn.setAttribute('class', 'btn');
  dislikebtn.setAttribute('id', `dislike-btn-${cnt}`);

  likevalue.textContent = 0;
  dislikevalue.textContent = 0;

  if (document.getElementById('my-input').value == '') {
    alert("Please enter the todo")
    return true;
  }

  if (document.getElementById('my-input').value === inputField) {
    document.getElementById('my-input').value = '';
  }
  TodoData.push({ id: cnt, like: 0, dislike: 0, text: inputField });


  removebtn.addEventListener('click', function (e) {

    let id = this.id.split('remove-btn-')[1];
    id = parseInt(id);
    let RemovedDomElement = document.getElementById(`remove-btn-${id}`).parentElement.parentElement;
    RemovedDomElement.remove();
    let removeObjectById = TodoData.findIndex(element => element.id === id);
    removeObjectById !== -1 && TodoData.splice(removeObjectById, 1)

  })
  likebtn.addEventListener('click', function () {
    let id = this.id.split("like-btn-")[1];

    id = parseInt(id);

    if (TodoData[id].like === 0 && TodoData[id].dislike === 0) {
      TodoData[id].like = TodoData[id].like + 1;
      likevalue.textContent = TodoData[id].like;
      SortTodo(TodoData);


    }

    else if (TodoData[id].like === 1 && TodoData[id].dislike === 0) {
      TodoData[id].like = TodoData[id].like - 1;
      likevalue.textContent = TodoData[id].like;
      TodoData[id].dislike = TodoData[id].dislike + 1;
      dislikevalue.textContent = TodoData[id].dislike;
      SortTodo(TodoData);


    }
    else if (TodoData[id].like === 0 && TodoData[id].dislike === 1) {
      TodoData[id].like = TodoData[id].like + 1;
      likevalue.textContent = TodoData[id].like;
      TodoData[id].dislike = TodoData[id].dislike - 1;
      dislikevalue.textContent = TodoData[id].dislike;
      SortTodo(TodoData);


    }
    for (var i = 1; i < TodoData.length; i++) {
      document.getElementById(`like-value-${i}`).innerHTML = TodoData[i].like;
      document.getElementById(`dislike-value-${i}`).innerHTML = TodoData[i].dislike;
      document.getElementById(`text-${i}`).innerHTML = TodoData[i].text;

    }
  })
  dislikebtn.addEventListener('click', function () {
    let id = this.id.split("dislike-btn-")[1];
    console.log(id);
    if (TodoData[id].dislike === 0 && TodoData[id].like === 0) {
      TodoData[id].dislike = TodoData[id].dislike + 1;
      dislikevalue.textContent = TodoData[id].dislike;
      SortTodo(TodoData);


    }
    else if (TodoData[id].like === 1 && TodoData[id].dislike === 0) {
      TodoData[id].like = TodoData[id].like - 1;
      likevalue.textContent = TodoData[id].like;
      TodoData[id].dislike = TodoData[id].dislike + 1;
      dislikevalue.textContent = TodoData[id].dislike;
      SortTodo(TodoData);

    }
    else if (TodoData[id].like === 0 && TodoData[id].dislike === 1) {
      TodoData[id].like = TodoData[id].like + 1;
      likevalue.textContent = TodoData[id].like;
      TodoData[id].dislike = TodoData[id].dislike - 1;
      dislikevalue.textContent = TodoData[id].dislike;
      SortTodo(TodoData);


    }
    for (var i = 1; i < TodoData.length; i++) {
      document.getElementById(`like-value-${i}`).innerHTML = TodoData[i].like;
      document.getElementById(`dislike-value-${i}`).innerHTML = TodoData[i].dislike;
      document.getElementById(`text-${i}`).innerHTML = TodoData[i].text;

    }
  })
  buttonContainer.appendChild(likebtn);
  buttonContainer.appendChild(dislikebtn);
  innerContainer.appendChild(buttonContainer);
  innerContainer.appendChild(inputText);
  removeContainer.appendChild(removebtn);
  innerMainContainer.appendChild(innerContainer);
  innerMainContainer.appendChild(removeContainer);

  paginatedList.appendChild(innerMainContainer)


  if (dom > 0) {
    domArr.forEach(myFunction);

    function myFunction(item, index) {
      console.log("index" + index + "  " + item);

      const element = document.getElementById(`dom${index}`);

      element.remove();
    }

    dom = 0;
  }

  domArr = [];

  const listItems = paginatedList.querySelectorAll("li");
  const paginationLimit = 5;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  console.log(pageCount);
  let currentPage = 1;


  const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.id = `dom${dom}`;
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    paginationNumbers.appendChild(pageNumber);
    domArr.push(dom);
    console.log(domArr);
    dom += 1;

  };

  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  };

  const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentPage) {
        button.classList.add("active");
      }
    });
  };

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    handleActivePageNumber();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });
  };



  getPaginationNumbers();
  setCurrentPage(1);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });


}






