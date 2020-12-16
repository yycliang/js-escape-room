console.log("connected!");
import { DOMSelectors } from "./DOM";
import { puzzles } from "./puzzles";

const init = function () {
  // starting and ending the game
  DOMSelectors.restartBtn.addEventListener("click", function () {
    window.location.reload();
  });
  DOMSelectors.startBtn.addEventListener("click", function () {
    DOMSelectors.startScreen.style.display = "none";
  });
  DOMSelectors.endBtn.addEventListener("click", function () {
    window.location.reload();
  });
  //use the foreach to display all the puzzles, images onto the popups
  puzzles.forEach((puzzle) =>
    DOMSelectors.allPuzzles.insertAdjacentHTML(
      "beforeend",
      `
        <div class="each-puzzle">
          <p>${puzzle.message}</p>
          <div class="puzzle-content">
            <img src="${puzzle.puzzleImg}" width="425px" height="auto" />
            <div class="flex-column">
              <p id="${puzzle.answer}Check"></p>
              <img src="${puzzle.answerImg}" width="300px" height="auto" alt="">
              <input type="password" id="${puzzle.answer}" placeholder="Your Answer" />
              <input type="submit" id="${puzzle.answer}Submit" value="Submit" />
            </div>
          </div>
        </div>
        `
    )
  );
  puzzles.forEach((puzzle) =>
    document
      .querySelector(`#${puzzle.answer}Submit`)
      .addEventListener("click", function () {
        var x = document.querySelector(`#${puzzle.answer}`).value.toUpperCase();
        console.log(x);
        if (`${puzzle.answer}` == "SCHOOL" && x == "SCHOOL") {
          DOMSelectors.endScreen.style.display = "block";
        } else if (x == `${puzzle.answer}`) {
          document.querySelector(`#${puzzle.answer}Check`).innerHTML = "";
          document.querySelector(`#${puzzle.answer}Check`).classList =
            "color-green";
          document
            .querySelector(`#${puzzle.answer}Check`)
            .insertAdjacentHTML("beforeend", "Correct :D!");
        } else {
          document.querySelector(`#${puzzle.answer}Check`).innerHTML = "";
          document.querySelector(`#${puzzle.answer}Check`).classList =
            "color-red";
          document
            .querySelector(`#${puzzle.answer}Check`)
            .insertAdjacentHTML("beforeend", `${x} is incorrect, try again :(`);
        }
      })
  );
  //the actual popup opening/closing
  DOMSelectors.puzzleClose.addEventListener("click", function () {
    document.getElementById("puzzlePopup").style.display = "none";
  });
  const openModal = function () {
    document.getElementById("puzzlePopup").style.display = "block";
  };

  //Opening Popup for each object
  var slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("each-puzzle");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  DOMSelectors.avengers.addEventListener("click", function () {
    openModal();
    currentSlide(1);
  });
  DOMSelectors.books.addEventListener("click", function () {
    openModal();
    currentSlide(4);
  });
  DOMSelectors.laptop.addEventListener("click", function () {
    openModal();
    currentSlide(5);
  });
  DOMSelectors.poster.addEventListener("click", function () {
    openModal();
    currentSlide(6);
  });
  DOMSelectors.calculator.addEventListener("click", function () {
    openModal();
    currentSlide(7);
  });
  DOMSelectors.globe.addEventListener("click", function () {
    openModal();
    currentSlide(8);
  });
  DOMSelectors.schedule.addEventListener("click", function () {
    openModal();
    currentSlide(2);
  });
  DOMSelectors.padlock.addEventListener("click", function () {
    openModal();
    currentSlide(3);
  });
};

init();
