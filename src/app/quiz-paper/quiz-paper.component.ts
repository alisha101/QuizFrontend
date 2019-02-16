import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-paper',
  templateUrl: './quiz-paper.component.html',
  styleUrls: ['./quiz-paper.component.css']
})
export class QuizPaperComponent implements OnInit {

  QueAns = [{
    "que": "qweerty",
    "ans": {
      "option1" : "a",
      "option2" : "b",
      "option3" : "c",
      "option4" : "d"
    }
    },
    {
      "que": "qweerty2",
      "ans": {
        "option1" : "a2",
        "option2" : "b2",
        "option3" : "c2",
        "option4" : "d2"
      }


    }]

  constructor() { 
   
    }
  

  ngOnInit() {
  }

}
