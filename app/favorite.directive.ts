import {Directive, HostBinding,HostListener,Input} from 'angular2/core';

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    
    //HostListener
    //  We wanna listen for the on mouse enter event on the host element, so we create the at host listener and set the event name to the string mouse enter. We don't need the event emitted argument so we can leave that off here. And remember, Angular works with native events without the on prefix. Okay, after the decorator, we need to have a function signature. This can be whatever name you want. Let's name it on mouse enter. It doesn't need a parameter, so we leave that empty, and in the function, we set this.hovering to true. 
    
    @HostListener('mouseenter')
    onMouseEnter(){
        this.hovering = true;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.hovering = true;
    }
    //  We also wanna listen for on mouse leave. So we add another host listener decorator, passing in mouse leave, and decorate a function that we can name onMouseLeave, and in this function, we set this.hovering to false. Over in our browser, we can inspect the media item and then mouse over and off of the favorite icon, and see the class getting applied and removed.
     
    @Input()
    set mwFavorite(value) {
        
        //  So all we need to do here is set this.isFavorite equal to the value received in the setter method. If we switch over to the browser we can inspect the media items and see that some get the class is-Favorite and some don't. 

        this.isFavorite = value;
    }
    //  Based on this code, Angular will match a property binding with the name mwFavorite, evaluate the statement that it's set to and pass the result of that statement into this setter method. Since we set up the directive property binding back in the media-item-list template, to use the mediaitem.isFavorite property, this setter will be receiving a bullion value and in the favorite directive, we already set up a class property named isFavorite that we use to add the is-Favorite CSS class with the host binding decorator.

}


