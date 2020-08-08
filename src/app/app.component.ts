import {Component} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sistema';
  panelOpenState = false;


/* branco */
branco_p = 0;
branco_m = 0;
branco_g = 0;
branco_gg = 0;

/* preto */
preto_p = 0;
preto_m = 0;
preto_g = 0;
preto_gg = 0;

/* amarelo */
amarelo_p = 0;
amarelo_m = 0;
amarelo_g = 0;
amarelo_gg = 0;


  /* branco */
  increment_branco_p() {
    this.branco_p++;

  }

  decrement_branco_p() {
    this.branco_p--;
    if(this.branco_p = 0){
      false
    }
  }

  increment_branco_m() {
    this.branco_m++;
  }

  decrement_branco_m() {
    this.branco_m--;
    if(this.branco_m = 0){
      false
    }
  }

  increment_branco_g() {
    this.branco_g++;
  }

  decrement_branco_g() {
    this.branco_g--;
    if(this.branco_g = 0){
      false
    }
  }

  increment_branco_gg() {
    this.branco_gg++;
  }

  decrement_branco_gg() {
    this.branco_gg--;
    if(this.branco_gg = 0){
      false
    }
  }

    /* preto */
    increment_preto_p() {
      this.preto_p++;
    }

    decrement_preto_p() {
      this.preto_p--;
      if(this.preto_p = 0){
        false
      }
    }

    increment_preto_m() {
      this.preto_m++;
    }

    decrement_preto_m() {
      this.preto_m--;
      if(this.preto_m = 0){
        false
      }
    }

    increment_preto_g() {
      this.preto_g++;
    }

    decrement_preto_g() {
      this.preto_g--;
      if(this.preto_g = 0){
        false
      }
    }

    increment_preto_gg() {
      this.preto_gg++;
    }

    decrement_preto_gg() {
      this.preto_gg--;
      if(this.preto_gg = 0){
        false
      }
    }

    /* preto */
    increment_amarelo_p() {
      this.amarelo_p++;
    }

    decrement_amarelo_p() {
      this.amarelo_p--;
      if(this.amarelo_p = 0){
        false
      }
    }

    increment_amarelo_m() {
      this.amarelo_m++;
    }

    decrement_amarelo_m() {
      this.amarelo_m--;
      if(this.amarelo_m = 0){
        false
      }
    }

    increment_amarelo_g() {
      this.amarelo_g++;
    }

    decrement_amarelo_g() {
      this.amarelo_g--;
      if(this.amarelo_g = 0){
        false
      }
    }

    increment_amarelo_gg() {
      this.amarelo_gg++;
    }

    decrement_amarelo_gg() {
      this.amarelo_gg--;
      if(this.amarelo_gg = 0){
        false
      }
    }
}


export class DividerOverviewExample {}




