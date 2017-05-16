import {Component} from '@angular/core'


@Component({
    selector:"home",
    templateUrl:"./home.component.html",
    styles:[`
        #imaginary_container{
            margin-top:20%; /* Don't copy this */
        }
    .stylish-input-group .input-group-addon{
     background: white !important; 
        }
    .stylish-input-group .form-control{
	    border-right:0; 
	    box-shadow:0 0 0; 
	    border-color:#ccc;
    }
    .stylish-input-group button{
        border:0;
        background:transparent;
    }
    `]
})

export class HomeComponent {
    
}