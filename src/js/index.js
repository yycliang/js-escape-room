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
    //the actual popup opening/closing
    DOMSelectors.puzzleClose.addEventListener("click", function (){
        document.getElementById("puzzlePopup").style.display = "none";
    });
    //use the foreach to display all the puzzles, images onto the popups
    puzzles.forEach((puzzle) =>
        DOMSelectors.allPuzzles.insertAdjacentHTML("beforeend", `
        <div class="each-puzzle">
          <p>${puzzle.message}</p>
          <div class="puzzle-content">
            <img src="${puzzle.puzzleImg}" width="400px" height="auto" />
            <div class="flex-column">
              <p id="${puzzle.answer}Check"></p>
              <img src="${puzzle.answerImg}" width="300px" height="auto" alt="">
              <input type="text" id="${puzzle.answer}" placeholder="Your Answer" />
              <input type="submit" id="${puzzle.answer}Submit" value="Submit" />
            </div>
          </div>
        </div>
        `)
    );
    puzzles.forEach((puzzle) =>
        document.querySelector(`#${puzzle.answer}Submit`).addEventListener("click", function () {
            var x = document.querySelector(`#${puzzle.answer}`).value.toUpperCase();
            console.log(x);
            if (`${puzzle.answer}` == "SCHOOL" && x == "SCHOOL") {
                DOMSelectors.endScreen.style.display = "block";
            } else if (x == `${puzzle.answer}`) {
                document.querySelector(`#${puzzle.answer}Check`).innerHTML = "";
                document.querySelector(`#${puzzle.answer}Check`).classList = "color-green";
                document.querySelector(`#${puzzle.answer}Check`).insertAdjacentHTML("beforeend", "Correct :D!");
            } else {
                document.querySelector(`#${puzzle.answer}Check`).innerHTML = "";
                document.querySelector(`#${puzzle.answer}Check`).classList = "color-red";
                document.querySelector(`#${puzzle.answer}Check`).insertAdjacentHTML("beforeend", "Incorrect, try again :(");
            }
        })   
    );
};

init();
