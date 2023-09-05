import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
interface romanType {
  [key: string]: number;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 url1: any;
 url2: any;
 url3: any;
 url4: any;
 text1: any;
 text2: any;
 text3: any;
 text4: any;
 wordsCount: romanType = {};
 newWords:any = [];
 httpOptions = {
  headers: new HttpHeaders({ 
  "Access-Control-Allow-Origin" : "*" 
  })}
 
  constructor( public http: HttpClient,private sanitizer: DomSanitizer  ) {
    
  }

 ngOnInit(): void {
    // this.http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyCdXv3Nwr_PNNet72aj463nYzQcdbw3zMQ&cx=930f7c011edb94a7a&q=shower&gl=au').subscribe((data:any) => {
    //   this.url1 = data.items[1].link;
    //   this.url2 = data.items[2].link;
    //   this.url3 = data.items[3].link;
    //   this.url4 = data.items[4].link;
    // })
    this.http.get('http://localhost:4200/result').subscribe((res:any)=>{
      this.text1 = res.text;
    })
    // fetch(this.url1).then((text:any) => {
    //     text = text.replace(/\n/gi, "");
    // text = text.replace(/<style([\s\S]*?)<\/style>/gi, "");
    // text = text.replace(/<script([\s\S]*?)<\/script>/gi, "");
    // text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
    // text = text.replace(/<\/div>/gi, "\n\n");
    // text = text.replace(/<\/li>/gi, "\n");
    // text = text.replace(/<li.*?>/gi, "  *  ");
    // text = text.replace(/<\/ul>/gi, "\n\n");
    // text = text.replace(/<\/p>/gi, "\n\n");
    // text = text.replace(/<br\s*[\/]?>/gi, "\n");
    // text = text.replace(/<[^>]+>/gi, "");
    // text = text.replace(/^\s*/gim, "");
    // text = text.replace(/ ,/gi, ",");
    // text = text.replace(/ +/gi, " ");
    // text = text.replace(/\n+/gi, "\n\n");
    //   });  
  }
  findOut() {
    let wordCounts;
    var cleanContent = this.text1.replace(/[^A-Za-z ]/g, ``).trim();
    let words = cleanContent.split(/\b/);
    words.forEach((word:any) => {
      if(word.length >= 4) {
         this.newWords.push(word);
      }
    })
    console.log(this.newWords);
//  console.log(words)
  // words.forEach((word:any) => {
  //   this.wordsCount[word.toLowerCase()] = (this.wordsCount[word.toLowerCase()] || 0) + 1;
  // })
  //  console.log(Object.entries(this.wordsCount).sort((a,b) => b[1] - a[1]));
  }
}
