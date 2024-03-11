import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  imports:[CommonModule],
  standalone:true,
  selector: 'base-layout',
  template: `
    <div class="grid-container ">
      <!--Left Nav-->
      <div class="p-4 text-dark   left-nav" [class.shadow]="false">
        <div class="left-nav-sticky">
          <div class="text-center mb-5 mb-sm-3">
            <img src="/assets/images/logo/effectiv-icon-up_logo_dark.png"
                 class="w-50"
                 alt="effectiv Accounting">
          </div>
          <div class="d-flex flex-column menu-list-container">
            <ul class="list-unstyled  menu-list">
              <li class=""><a href="" class="active"><i class="la la-dashboard la-2x"></i>Dashboard</a></li>
              <li><a href="" class=""><i class="la la-shopping-cart la-2x"></i>Sales</a></li>
              <li><a href="" class=""><i class="la la-dollar-sign la-2x"></i>Purchases</a></li>
              <li><a href="" class=""><i class="la la-warehouse la-2x"></i>Inventory</a></li>
              <li><a href="" class=""><i class="la la-users la-2x"></i>Customers</a></li>
              <li><a href="" class=""><i class="la la-coins la-2x"></i>Financial Account</a></li>
              <li></li>

            </ul>
          </div>
          <div class="mt-5 ">
            <a href="" class="p-3 fw-bold d-flex justify-content-start align-items-center text-decoration-none text-danger"><i
              class="me-3 las la-sign-out-alt la-2x"></i>Logout</a>
          </div>
        </div>
      </div>
      <!--End Of Left Nav-->

      <!--Main Area-->
      <div class="h-100 position-relative main-area">
        <!--Top Nav section with Dashboard and user Profile-->
        <div class="top-nav  shadow-sm px-3 d-flex justify-content-between align-items-center">
          <div class="flex-fill d-flex justify-content-between align-items-center top-nav-header">
            <span class="lead fw-bold">Dashboard</span>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-column justify-content-center " style="font-size: 0.89rem;">
                <small class="text-uppercase text-end ">Alfred Obialo</small>
                <small class=" text-end text-primary">alfredcsdinc&#64;gmail.com</small>
              </div>

              <div class="ms-3 d-flex p-2 border-1 border text-uppercase text-white justify-content-center align-items-center"
                   style="width:40px; height:40px; border-radius: 50%;
                  font-size:1.1rem; font-weight: bold; background-color: #565555;">
                AO
              </div>
            </div>
          </div>

        </div>
        <!--End of Top Nav-->

        <!--Main Content Section-->
        <div class="d-flex ">
          <div class="sub-menu-section bg-white shadow align-content-stretch ">
            <div class="sub-menu-items">
              <!--Left Menu Sub menus Items-->
              <ul class="list-unstyled left-menu-sub-menus">
                <li><a href="#" class="active"><i class="la la-file-alt"></i>Todos</a></li>
                <li><a href="#"><i class="la la-clock"></i>Counter App</a></li>
              </ul>
            </div>
          </div>
          <div class="container main-section d-flex flex-grow-1 justify-content-center vh-100">
            <div class="p-4 bg-primary-subtle flex-grow-1">
              <h3 class="fw-bold text-primary">Welcome, <span class="text-uppercase">Alfred Obialo</span></h3>
            </div>
          </div>
        </div>
        <!--  End Of Main Content Section-->

      </div>
      <!-- End Of Main Area-->
    </div>

  `,
  styles: `

    .grid-container {
      display: grid;
      grid-template-columns: minmax(var(--left-menu-width), var(--left-menu-width)) minmax(max-content, auto);

    }

    div.left-nav {
      
      background-color:var(--bg-left-nav) ;
      z-index: 15;
    }
    div.left-nav div.left-nav-sticky{
      margin-top: 10px;
      position: sticky;
      top: 50px;
      left: 0;
      
    }

    div.sub-menu-section {
      width: calc(var(--left-menu-width) - 10px);
      align-content: stretch;
    }

    div.sub-menu-items {
      margin-top: calc(var(--top-nav-height) + 60px);
      position: sticky;
      top: calc(var(--top-nav-height) + 100px);
    }

    div.top-nav {
      position: fixed;
      height: var(--top-nav-height);
      background-color: #ffffff;
      left: var(--left-menu-width);
      z-index: 10;
      top: 0;
      right: 0;
    }

    div.top-nav .top-nav-header {

    }

    div.main-section {
      margin-top: calc(var(--top-nav-height) + 40px);
    }

    .menu-list-container {
      margin-top: 50px;
    }


    .menu-list li {
      margin-bottom: 5px;
    }

    .menu-list li a {
      text-decoration: none;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #464545;
      padding: 0.78rem;
      border-radius: 9px;
      transition: all 400ms linear;
    }

    .menu-list li a i {
      margin-right: 1.4rem;
    }

    .menu-list li a.active, .menu-list li a:hover {
      background-color: #1f59c5;
      color: white !important;
      font-weight: 700;
    }

    .left-menu-sub-menus li {
      margin-bottom: 10px;
    }

    .left-menu-sub-menus li a {
      text-decoration: none;
      transition: all 400ms linear;
      display: flex;
      align-items:center;
      color: #1e5094;
      border-radius: 0px;
      padding: 7px 0.85rem
    }
    .left-menu-sub-menus li a i{
      margin-right : 1.3rem;
    }

    .left-menu-sub-menus li a:hover, .left-menu-sub-menus li a.active {
      color: #585353;
      font-weight: 700;
    }
    .left-menu-sub-menus li a.active {
      background-color: var(--bg-left-nav);
    }
  `
})

export class BaseLayout implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
