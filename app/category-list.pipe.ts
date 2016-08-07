//category-list.pipe.ts
//    Creating your own custom pipes in Angular is fairly trivial, basically involving a decorator with a bit of metadata and a known method signature on a class. Let's build a custom pipe for the application that will display a list of all the unique media-item categories for the media items currently displayed on the screen. We start by creating a new file named category-list.pipe.ts. We need to use the Pipe decorator which is in angular2/core.

//     So let's import that. The Pipe decorator accepts an object of metadata similar to component and directive decorators. There are two properties available: name and peer. So we'll use an object literal and we set name to categoryList. This is the name we use in our templates. The other property, peer, helps define if a pipe is stateless or stateful. Pipes are peer or stateless by default. And this metadata property is optional. Our pipe will be stateless, so we don't need to include that metadata property.

//     After the decorator call, we need to have a class. So we add export class CategoryListPipe. Just like components in decorators, you will need to import pipes you create to the places where you intend to use them. Thus, the export of the class. Next we need to implement a transform method. Angular calls this method on a pipe class and will pass in the first argument as the value being piped to it. It will also pass in any additional pipe parameters after the first argument. First, let's make use of the value parameter.

//     Then we will alter the pipe to work with parameters. So we add a parameter named mediaItems. The parameter name can be whatever you want. Only the method name has to be what Angular is expecting. Okay, now we can fill out the logic of the transform method. We want to get all the distinct category names across all mediaItems passed in. Let's just add a block of code to do that logic on an array. Over in the file tree, I'm going to open up the sample.txt file which has our sample code. I'm going to copy this out of here and go back to our new pipe and paste it into our transform method. 

import {Pipe} from 'angular2/core';

@Pipe({
    name:'categoryList'
})
export class CategoryListPipe {
    transform(mediaItems) {

    var categories = [];
    mediaItems.forEach(mediaItems =>{
        if (categories.indexOf(mediaItems.category) <= -1){
            categories.push(mediaItems.category);

        }
    });
    return categories.join(',')
    }
}