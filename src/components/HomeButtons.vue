<template>
  <div id="home-buttons">
  <div class="container-fluid bg-light">
      <div class="col d-grid m-0 align-items-center">
        <div id="col1" class="d-flex m-0 align-items-center">
              <div class="nav-link active text-primary border-primary rounded-pill" aria-current="page" href="#">
                <input type="text" width="5px" class="search form-control border-primary rounded-pill" placeholder="search">
          </div>
           
              <a class="nav-link active text-primary" aria-current="page" href="#">
            <button type="button" class="btn btn-light border-primary rounded-circle text-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-nested" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
               </svg>
            </button>
          </a>
            
              <a class="nav-link active text-primary" aria-current="page" href="#">
            <button type="button" class="btn btn-light border-primary rounded-circle text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </a>
          <div class="nav-link active text-primary" aria-current="page" href="#">
           <button type="button" class="btn btn-light border-primary rounded-pill text-primary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
            </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
            <div class="nav-link active text-primary" aria-current="page" href="#">
           <button type="button" class="btn btn-light border-primary rounded-pill text-primary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Week
            </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
              <div class="nav-link active text-primary" aria-current="page" href="#">
                <div class="input-group date" data-provide="datepicker">
                    <input type="date" class="form-control">
                    <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
              </div>
            </div>
          </div>
             <a class="nav-link active text-primary" aria-current="page" href="#">
            <button type="button" class="btn btn-light border-primary rounded-pill text-primary">
              Today
            </button>
          </a>        
        </div>
        <div id="col2" class="d-flex m-0 align-items-center">
          <a class="nav-link active text-primary" aria-current="page" href="#">
            <button type="button" class="btn btn-outline-danger border-primary rounded-circle">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
            </button>
          </a>
           <div class="nav-link active text-primary" aria-current="page" href="#">
           <button type="button" class="btn btn-light border-primary rounded-pill text-primary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Actions
            </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
           </div>
            <a class="nav-link active text-primary" aria-current="page" href="#">
            <button type="button" class="btn btn-light border-primary rounded-pill text-primary" disabled>
              Publish
            </button>
              </a>
            <div class="nav-link active text-primary" aria-current="page" href="#">    
             <button type="button" class="btn btn-primary border-primary rounded-pill  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Add Shifts
            </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>      
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "HomeButtons"
}
</script>

<style>
button {
    margin: 1px;
}
#home-buttons {
    margin-top: 50px;
    height: 100px;
    background-color: whitesmoke;
}
</style>