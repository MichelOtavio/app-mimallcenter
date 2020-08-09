import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobretudo',
  templateUrl: './sobretudo.component.html',
  styleUrls: ['./sobretudo.component.css']
})
export class SobretudoComponent implements OnInit {

  title = 'sistema';
  panelOpenState = false;

  /* preto */
  base1_p = 0;
  base1_m = 0;
  base1_g = 0;
  base1_gg = 0;
  base1_g1 = 0;
  base1_g2 = 0;
  base1_g3 = 0;

  /* branco */
  base2_p = 0;
  base2_m = 0;
  base2_g = 0;
  base2_gg = 0;
  base2_g1 = 0;
  base2_g2 = 0;
  base2_g3 = 0;

  /* verede */
  base3_p = 0;
  base3_m = 0;
  base3_g = 0;
  base3_gg = 0;
  base3_g1 = 0;
  base3_g2 = 0;
  base3_g3 = 0;

  /* vinho */
  base4_p = 0;
  base4_m = 0;
  base4_g = 0;
  base4_gg = 0;
  base4_g1 = 0;
  base4_g2 = 0;
  base4_g3 = 0;

    /* pink */
  base5_p = 0;
  base5_m = 0;
  base5_g = 0;
  base5_gg = 0;
  base5_g1 = 0;
  base5_g2 = 0;
  base5_g3 = 0;

  /* amarelo */
  base6_p = 0;
  base6_m = 0;
  base6_g = 0;
  base6_gg = 0;
  base6_g1 = 0;
  base6_g2 = 0;
  base6_g3 = 0;


  /* vermelho */
  base7_p = 0;
  base7_m = 0;
  base7_g = 0;
  base7_gg = 0;
  base7_g1 = 0;
  base7_g2 = 0;
  base7_g3 = 0;


  /* royal */
  base8_p = 0;
  base8_m = 0;
  base8_g = 0;
  base8_gg = 0;
  base8_g1 = 0;
  base8_g2 = 0;
  base8_g3 = 0;


  /* marinho */
  base9_p = 0;
  base9_m = 0;
  base9_g = 0;
  base9_gg = 0;
  base9_g1 = 0;
  base9_g2 = 0;
  base9_g3 = 0;



  /* militar */
  base10_p = 0;
  base10_m = 0;
  base10_g = 0;
  base10_gg = 0;
  base10_g1 = 0;
  base10_g2 = 0;
  base10_g3 = 0;


  /* azul bb */
  base11_p = 0;
  base11_m = 0;
  base11_g = 0;
  base11_gg = 0;
  base11_g1 = 0;
  base11_g2 = 0;
  base11_g3 = 0;


  /* vinho */
  base12_p = 0;
  base12_m = 0;
  base12_g = 0;
  base12_gg = 0;
  base12_g1 = 0;
  base12_g2 = 0;
  base12_g3 = 0;



  /* esmeralda */
  base13_p = 0;
  base13_m = 0;
  base13_g = 0;
  base13_gg = 0;
  base13_g1 = 0;
  base13_g2 = 0;
  base13_g3 = 0;


  /* bege */
  base14_p = 0;
  base14_m = 0;
  base14_g = 0;
  base14_gg = 0;
  base14_g1 = 0;
  base14_g2 = 0;
  base14_g3 = 0;





/****************************  linha 01  ****************************/

  /**** TAMANHO P ****/
  increment_base1_p() {
    this.base1_p++
  }

  decrement_base1_p(value) {
    if(this.base1_p-- <= 0 ){
      this.base1_p = 0;
    }
  }

  /**** TAMANHO M ****/
  increment_base1_m() {
    this.base1_m++;
  }

  decrement_base1_m() {
    if(this.base1_m-- <= 0 ){
      this.base1_m = 0;
    }
  }

  /**** TAMANHO G ****/
  increment_base1_g() {
    this.base1_g++;
  }

  decrement_base1_g() {
    if(this.base1_g-- <= 0 ){
      this.base1_g = 0;
    }
  }

  /**** TAMANHO GG ****/
  increment_base1_gg() {
    this.base1_gg++;
  }

  decrement_base1_gg() {
    if(this.base1_gg-- <= 0 ){
      this.base1_gg = 0;
    }
  }

  /**** TAMANHO G1 ****/
  increment_base1_g1() {
    this.base1_g1++;
  }

  decrement_base1_g1() {
    if(this.base1_g1-- <= 0 ){
      this.base1_g1 = 0;
    }
   }

  /**** TAMANHO G2 ****/
  increment_base1_g2() {
    this.base1_g2++;
  }

  decrement_base1_g2() {
    if(this.base1_g2-- <= 0 ){
      this.base1_g2 = 0;
    }
  }

  /**** TAMANHO G2 ****/
  increment_base1_g3() {
    this.base1_g3++;
  }

  decrement_base1_g3() {
    if(this.base1_g3-- <= 0 ){
      this.base1_g3 = 0;
    }
  }

/****************************  linha 01  ****************************/

/****************************  linha 02  ****************************/

    /**** TAMANHO P ****/
    increment_base2_p() {
      this.base2_p++
    }

    decrement_base2_p(value) {
      if(this.base2_p-- <= 0 ){
        this.base2_p = 0;
      }
    }

    /**** TAMANHO M ****/
    increment_base2_m() {
      this.base2_m++;
    }

    decrement_base2_m() {
      if(this.base2_m-- <= 0 ){
        this.base2_m = 0;
      }
    }

    /**** TAMANHO G ****/
    increment_base2_g() {
      this.base2_g++;
    }

    decrement_base2_g() {
      if(this.base2_g-- <= 0 ){
        this.base2_g = 0;
      }
    }

    /**** TAMANHO GG ****/
    increment_base2_gg() {
      this.base2_gg++;
    }

    decrement_base2_gg() {
      if(this.base2_gg-- <= 0 ){
        this.base2_gg = 0;
      }
    }

    /**** TAMANHO G1 ****/
    increment_base2_g1() {
      this.base2_g1++;
    }

    decrement_base2_g1() {
      if(this.base2_g1-- <= 0 ){
        this.base2_g1 = 0;
      }
     }

    /**** TAMANHO G2 ****/
    increment_base2_g2() {
      this.base2_g2++;
    }

    decrement_base2_g2() {
      if(this.base2_g2-- <= 0 ){
        this.base2_g2 = 0;
      }
    }

    /**** TAMANHO G2 ****/
    increment_base2_g3() {
      this.base2_g3++;
    }

    decrement_base2_g3() {
      if(this.base2_g3-- <= 0 ){
        this.base2_g3 = 0;
      }
    }

/****************************  linha 02  ****************************/

/****************************  linha 03  ****************************/

   /**** TAMANHO P ****/
 increment_base3_p() {
  this.base3_p++
}

decrement_base3_p(value) {
  if(this.base3_p-- <= 0 ){
    this.base3_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base3_m() {
  this.base3_m++;
}

decrement_base3_m() {
  if(this.base3_m-- <= 0 ){
    this.base3_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base3_g() {
  this.base3_g++;
}

decrement_base3_g() {
  if(this.base3_g-- <= 0 ){
    this.base3_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base3_gg() {
  this.base3_gg++;
}

decrement_base3_gg() {
  if(this.base3_gg-- <= 0 ){
    this.base3_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base3_g1() {
  this.base3_g1++;
}

decrement_base3_g1() {
  if(this.base3_g1-- <= 0 ){
    this.base3_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base3_g2() {
  this.base3_g2++;
}

decrement_base3_g2() {
  if(this.base3_g2-- <= 0 ){
    this.base3_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base3_g3() {
  this.base3_g3++;
}

decrement_base3_g3() {
  if(this.base3_g3-- <= 0 ){
    this.base3_g3 = 0;
  }
}

/****************************  linha 03  ****************************/

/****************************  linha 04  ****************************/

   /**** TAMANHO P ****/
 increment_base4_p() {
  this.base4_p++
}

decrement_base4_p(value) {
  if(this.base4_p-- <= 0 ){
    this.base4_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base4_m() {
  this.base4_m++;
}

decrement_base4_m() {
  if(this.base4_m-- <= 0 ){
    this.base4_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base4_g() {
  this.base4_g++;
}

decrement_base4_g() {
  if(this.base4_g-- <= 0 ){
    this.base4_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base4_gg() {
  this.base4_gg++;
}

decrement_base4_gg() {
  if(this.base4_gg-- <= 0 ){
    this.base4_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base4_g1() {
  this.base4_g1++;
}

decrement_base4_g1() {
  if(this.base4_g1-- <= 0 ){
    this.base4_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base4_g2() {
  this.base4_g2++;
}

decrement_base4_g2() {
  if(this.base4_g2-- <= 0 ){
    this.base4_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base4_g3() {
  this.base4_g3++;
}

decrement_base4_g3() {
  if(this.base4_g3-- <= 0 ){
    this.base4_g3 = 0;
  }
}


/****************************  linha 04  ****************************/

/****************************  linha 05  ****************************/

   /**** TAMANHO P ****/
 increment_base5_p() {
  this.base5_p++
}

decrement_base5_p(value) {
  if(this.base5_p-- <= 0 ){
    this.base5_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base5_m() {
  this.base5_m++;
}

decrement_base5_m() {
  if(this.base5_m-- <= 0 ){
    this.base5_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base5_g() {
  this.base5_g++;
}

decrement_base5_g() {
  if(this.base5_g-- <= 0 ){
    this.base5_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base5_gg() {
  this.base5_gg++;
}

decrement_base5_gg() {
  if(this.base5_gg-- <= 0 ){
    this.base5_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base5_g1() {
  this.base5_g1++;
}

decrement_base5_g1() {
  if(this.base5_g1-- <= 0 ){
    this.base5_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base5_g2() {
  this.base5_g2++;
}

decrement_base5_g2() {
  if(this.base5_g2-- <= 0 ){
    this.base5_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base5_g3() {
  this.base5_g3++;
}

decrement_base5_g3() {
  if(this.base5_g3-- <= 0 ){
    this.base5_g3 = 0;
  }
}


/****************************  linha 05  ****************************/

/****************************  linha 06  ****************************/

   /**** TAMANHO P ****/
 increment_base6_p() {
  this.base6_p++
}

decrement_base6_p(value) {
  if(this.base6_p-- <= 0 ){
    this.base6_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base6_m() {
  this.base6_m++;
}

decrement_base6_m() {
  if(this.base6_m-- <= 0 ){
    this.base6_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base6_g() {
  this.base6_g++;
}

decrement_base6_g() {
  if(this.base6_g-- <= 0 ){
    this.base6_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base6_gg() {
  this.base6_gg++;
}

decrement_base6_gg() {
  if(this.base6_gg-- <= 0 ){
    this.base6_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base6_g1() {
  this.base6_g1++;
}

decrement_base6_g1() {
  if(this.base6_g1-- <= 0 ){
    this.base6_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base6_g2() {
  this.base6_g2++;
}

decrement_base6_g2() {
  if(this.base6_g2-- <= 0 ){
    this.base6_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base6_g3() {
  this.base6_g3++;
}

decrement_base6_g3() {
  if(this.base6_g3-- <= 0 ){
    this.base6_g3 = 0;
  }
}


/****************************  linha 06  ****************************/

/****************************  linha 07  ****************************/

   /**** TAMANHO P ****/
 increment_base7_p() {
  this.base7_p++
}

decrement_base7_p(value) {
  if(this.base7_p-- <= 0 ){
    this.base7_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base7_m() {
  this.base7_m++;
}

decrement_base7_m() {
  if(this.base7_m-- <= 0 ){
    this.base7_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base7_g() {
  this.base7_g++;
}

decrement_base7_g() {
  if(this.base7_g-- <= 0 ){
    this.base7_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base7_gg() {
  this.base7_gg++;
}

decrement_base7_gg() {
  if(this.base7_gg-- <= 0 ){
    this.base7_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base7_g1() {
  this.base7_g1++;
}

decrement_base7_g1() {
  if(this.base7_g1-- <= 0 ){
    this.base7_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base7_g2() {
  this.base7_g2++;
}

decrement_base7_g2() {
  if(this.base7_g2-- <= 0 ){
    this.base7_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base7_g3() {
  this.base7_g3++;
}

decrement_base7_g3() {
  if(this.base7_g3-- <= 0 ){
    this.base7_g3 = 0;
  }
}


/****************************  linha 07  ****************************/

/****************************  linha 08  ****************************/

  /**** TAMANHO P ****/
  increment_base8_p() {
    this.base8_p++
  }

  decrement_base8_p(value) {
    if(this.base8_p-- <= 0 ){
      this.base8_p = 0;
    }
  }

  /**** TAMANHO M ****/
  increment_base8_m() {
    this.base8_m++;
  }

  decrement_base8_m() {
    if(this.base8_m-- <= 0 ){
      this.base8_m = 0;
    }
  }

  /**** TAMANHO G ****/
  increment_base8_g() {
    this.base8_g++;
  }

  decrement_base8_g() {
    if(this.base8_g-- <= 0 ){
      this.base8_g = 0;
    }
  }

  /**** TAMANHO GG ****/
  increment_base8_gg() {
    this.base8_gg++;
  }

  decrement_base8_gg() {
    if(this.base8_gg-- <= 0 ){
      this.base8_gg = 0;
    }
  }

  /**** TAMANHO G1 ****/
  increment_base8_g1() {
    this.base8_g1++;
  }

  decrement_base8_g1() {
    if(this.base8_g1-- <= 0 ){
      this.base8_g1 = 0;
    }
   }

  /**** TAMANHO G2 ****/
  increment_base8_g2() {
    this.base8_g2++;
  }

  decrement_base8_g2() {
    if(this.base8_g2-- <= 0 ){
      this.base8_g2 = 0;
    }
  }

  /**** TAMANHO G2 ****/
  increment_base8_g3() {
    this.base8_g3++;
  }

  decrement_base8_g3() {
    if(this.base8_g3-- <= 0 ){
      this.base8_g3 = 0;
    }
  }


/****************************  linha 08  ****************************/

/****************************  linha 09  ****************************/
 /**** TAMANHO P ****/
 increment_base9_p() {
  this.base9_p++
}

decrement_base9_p(value) {
  if(this.base9_p-- <= 0 ){
    this.base9_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base9_m() {
  this.base9_m++;
}

decrement_base9_m() {
  if(this.base9_m-- <= 0 ){
    this.base9_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base9_g() {
  this.base9_g++;
}

decrement_base9_g() {
  if(this.base9_g-- <= 0 ){
    this.base9_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base9_gg() {
  this.base9_gg++;
}

decrement_base9_gg() {
  if(this.base9_gg-- <= 0 ){
    this.base9_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base9_g1() {
  this.base9_g1++;
}

decrement_base9_g1() {
  if(this.base9_g1-- <= 0 ){
    this.base9_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base9_g2() {
  this.base9_g2++;
}

decrement_base9_g2() {
  if(this.base9_g2-- <= 0 ){
    this.base9_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base9_g3() {
  this.base9_g3++;
}

decrement_base9_g3() {
  if(this.base9_g3-- <= 0 ){
    this.base9_g3 = 0;
  }
}


/****************************  linha 09  ****************************/

/****************************  linha 10  ****************************/

  /**** TAMANHO P ****/
  increment_base10_p() {
    this.base10_p++
  }

  decrement_base10_p(value) {
    if(this.base10_p-- <= 0 ){
      this.base10_p = 0;
    }
  }

  /**** TAMANHO M ****/
  increment_base10_m() {
    this.base10_m++;
  }

  decrement_base10_m() {
    if(this.base10_m-- <= 0 ){
      this.base10_m = 0;
    }
  }

  /**** TAMANHO G ****/
  increment_base10_g() {
    this.base10_g++;
  }

  decrement_base10_g() {
    if(this.base10_g-- <= 0 ){
      this.base10_g = 0;
    }
  }

  /**** TAMANHO GG ****/
  increment_base10_gg() {
    this.base10_gg++;
  }

  decrement_base10_gg() {
    if(this.base10_gg-- <= 0 ){
      this.base10_gg = 0;
    }
  }

  /**** TAMANHO G1 ****/
  increment_base10_g1() {
    this.base10_g1++;
  }

  decrement_base10_g1() {
    if(this.base10_g1-- <= 0 ){
      this.base10_g1 = 0;
    }
   }

  /**** TAMANHO G2 ****/
  increment_base10_g2() {
    this.base10_g2++;
  }

  decrement_base10_g2() {
    if(this.base10_g2-- <= 0 ){
      this.base10_g2 = 0;
    }
  }

  /**** TAMANHO G2 ****/
  increment_base10_g3() {
    this.base10_g3++;
  }

  decrement_base10_g3() {
    if(this.base10_g3-- <= 0 ){
      this.base10_g3 = 0;
    }
  }


/****************************  linha 10  ****************************/

/****************************  linha 11  ****************************/

   /**** TAMANHO P ****/
 increment_base11_p() {
  this.base11_p++
}

decrement_base11_p(value) {
  if(this.base11_p-- <= 0 ){
    this.base11_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base11_m() {
  this.base11_m++;
}

decrement_base11_m() {
  if(this.base11_m-- <= 0 ){
    this.base11_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base11_g() {
  this.base11_g++;
}

decrement_base11_g() {
  if(this.base11_g-- <= 0 ){
    this.base11_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base11_gg() {
  this.base11_gg++;
}

decrement_base11_gg() {
  if(this.base11_gg-- <= 0 ){
    this.base11_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base11_g1() {
  this.base11_g1++;
}

decrement_base11_g1() {
  if(this.base11_g1-- <= 0 ){
    this.base11_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base11_g2() {
  this.base11_g2++;
}

decrement_base11_g2() {
  if(this.base11_g2-- <= 0 ){
    this.base11_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base11_g3() {
  this.base11_g3++;
}

decrement_base11_g3() {
  if(this.base11_g3-- <= 0 ){
    this.base11_g3 = 0;
  }
}

/****************************  linha 11  ****************************/

/****************************  linha 12  ****************************/

   /**** TAMANHO P ****/
 increment_base12_p() {
  this.base12_p++
}

decrement_base12_p(value) {
  if(this.base12_p-- <= 0 ){
    this.base12_p = 0;
  }
}

/**** TAMANHO M ****/
increment_base12_m() {
  this.base12_m++;
}

decrement_base12_m() {
  if(this.base12_m-- <= 0 ){
    this.base12_m = 0;
  }
}

/**** TAMANHO G ****/
increment_base12_g() {
  this.base12_g++;
}

decrement_base12_g() {
  if(this.base12_g-- <= 0 ){
    this.base12_g = 0;
  }
}

/**** TAMANHO GG ****/
increment_base12_gg() {
  this.base12_gg++;
}

decrement_base12_gg() {
  if(this.base12_gg-- <= 0 ){
    this.base12_gg = 0;
  }
}

/**** TAMANHO G1 ****/
increment_base12_g1() {
  this.base12_g1++;
}

decrement_base12_g1() {
  if(this.base12_g1-- <= 0 ){
    this.base12_g1 = 0;
  }
 }

/**** TAMANHO G2 ****/
increment_base12_g2() {
  this.base12_g2++;
}

decrement_base12_g2() {
  if(this.base12_g2-- <= 0 ){
    this.base12_g2 = 0;
  }
}

/**** TAMANHO G2 ****/
increment_base12_g3() {
  this.base12_g3++;
}

decrement_base12_g3() {
  if(this.base12_g3-- <= 0 ){
    this.base12_g3 = 0;
  }
}

/****************************  linha 12  ****************************/

/****************************  linha 13  ****************************/

  /**** TAMANHO P ****/
  increment_base13_p() {
    this.base13_p++
  }

  decrement_base13_p(value) {
    if(this.base13_p-- <= 0 ){
      this.base13_p = 0;
    }
  }

  /**** TAMANHO M ****/
  increment_base13_m() {
    this.base13_m++;
  }

  decrement_base13_m() {
    if(this.base13_m-- <= 0 ){
      this.base13_m = 0;
    }
  }

  /**** TAMANHO G ****/
  increment_base13_g() {
    this.base13_g++;
  }

  decrement_base13_g() {
    if(this.base13_g-- <= 0 ){
      this.base13_g = 0;
    }
  }

  /**** TAMANHO GG ****/
  increment_base13_gg() {
    this.base13_gg++;
  }

  decrement_base13_gg() {
    if(this.base13_gg-- <= 0 ){
      this.base13_gg = 0;
    }
  }

  /**** TAMANHO G1 ****/
  increment_base13_g1() {
    this.base13_g1++;
  }

  decrement_base13_g1() {
    if(this.base13_g1-- <= 0 ){
      this.base13_g1 = 0;
    }
   }

  /**** TAMANHO G2 ****/
  increment_base13_g2() {
    this.base13_g2++;
  }

  decrement_base13_g2() {
    if(this.base13_g2-- <= 0 ){
      this.base13_g2 = 0;
    }
  }

  /**** TAMANHO G2 ****/
  increment_base13_g3() {
    this.base13_g3++;
  }

  decrement_base13_g3() {
    if(this.base13_g3-- <= 0 ){
      this.base13_g3 = 0;
    }
  }


/****************************  linha 13  ****************************/

  constructor() { }

  ngOnInit(): void {
  }

}
