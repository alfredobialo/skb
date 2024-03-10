import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  imports:[CommonModule],
  standalone:true,
  selector: 'base-layout',
  template: `
    <div class="grid-container">
      <!--<div class="bg-success">Base Layout</div>
      <div class="bg-danger flex-fill " >asdsfsdf</div>-->
      <div class="bg-primary-subtle p-4 text-dark shadow">wedfewrtee4rf happens</div>

      <div class="vh-100 position-relative">
        <!--Top Nav section with Dashboard and user Profile-->
        <div class="top-nav bg-white shadow-sm px-3 d-flex justify-content-between align-items-center">
            <span class="lead fw-bold">Dashboard</span>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column justify-content-center " style="font-size: 0.89rem;">
              <small class="text-uppercase text-end ">Alfred Obialo</small>
              <small class=" text-end text-primary">alfredcsdinc&#64;gmail.com</small>
            </div>

            <div class="ms-3 d-flex p-2 text-uppercase bg-primary text-white justify-content-center align-items-center" style="width:40px; height:40px; border-radius: 50%; font-size:1.1rem; font-weight: bold">
               AO
            </div>
          </div>
        </div>
        <!--End of Top Nav-->

        <!--Main Content Section-->
        <div class="container main-section d-flex justify-content-center">
            <div class="p-4 bg-primary-subtle flex-grow-1">
              <h3 class="fw-bold text-primary">Welcome, <span class="text-uppercase">Alfred Obialo</span></h3>
            </div>
        </div>
    <!--  End Of Main Content Section-->
      </div>

    </div>

  `,
  styles: `
    .grid-container{
        display:grid;
        grid-template-columns : minmax(270px,270px) 3fr ;

    }
    .top-nav{
      position : fixed;
      right:0;
      left:270px;
      height:70px;
    }

    div.main-section {
      margin-top: 100px;
    }
  `
})

export class BaseLayout implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
