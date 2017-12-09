import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  RowData;
  ngOnInit() {
    this.RowData = [
      { FirstName: "Jill1", LastName: "Huo1", Age: 50 },
      { FirstName: "Jill2", LastName: "Huo2", Age: 770 },
      { FirstName: "Jill3", LastName: "Huo3", Age: 44 },
      { FirstName: "Jill4", LastName: "Huo4", Age: 33 },
      { FirstName: "Jill5", LastName: "Huo5", Age: 22 },
      { FirstName: "Jill6", LastName: "Huo6", Age: 11 }
    ];
  }
  RowUp(index,SelectedData){
    if(index>0){
      const PrevIndex=index-1
      const PrevData=this.RowData[PrevIndex]
      this.RowData[index]=PrevData;
      this.RowData[PrevIndex]=SelectedData;
    }

  }
  RowDown(index,SelectedData){
    if(index<this.RowData.length-1){
      const NextIndex=index+1
      const PrevData=this.RowData[NextIndex]
      this.RowData[index]=PrevData;
      this.RowData[NextIndex]=SelectedData;
    }

  }
}
