import { Component } from '@angular/core';

@Component({
  // nom unique utilisé par une balise html pour afficher le composant
  selector: 'app-root',
  // chemin vers le html à injecter
  templateUrl: './app.component.html',
  // chemin vers le css à injecter
  styleUrls: ['./app.component.css']
})

export class AppComponent {

titleApp: string = "Posts";

// Array des posts
blogs = [
{
title: 'Mon premier post',
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nibh, rutrum vel odio sed, fermentum commodo orci. Duis vitae semper nulla. Donec euismod lacinia felis non sollicitudin. Quisque porttitor, orci id gravida consequat, ante odio rutrum massa, eu consectetur arcu eros eu nibh. Vestibulum pretium, velit at porttitor venenatis, mi enim semper sapien, et vehicula mauris lacus nec magna. Nullam laoreet varius est, vitae luctus purus scelerisque quis. Donec faucibus mollis gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
loveIts: -5,
createAt: new Date()
},
{
title: 'Mon nouveau post',
content: 'Nam cursus felis at venenatis consectetur. Donec sapien urna, vehicula vehicula diam efficitur, sagittis efficitur tortor. Praesent eleifend lectus ac quam maximus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat.',
loveIts: 0,
createAt: new Date()
},
{
title: 'Et encore un !',
content: 'Vestibulum ex nunc, aliquam ut tellus vel, placerat posuere erat. Vivamus pellentesque, ipsum vel cursus ultrices, justo nisi efficitur urna, sed porta massa ipsum nec lacus. Aenean accumsan, justo ac condimentum porttitor, ex sem faucibus enim, id pharetra magna mi egestas sapien. Maecenas sit amet dapibus leo. In ut sapien velit. Duis mattis et lacus nec hendrerit. Pellentesque porttitor auctor risus, a feugiat ipsum imperdiet ut. Curabitur non leo rhoncus, tempus libero sed, egestas leo. Donec sodales egestas turpis, vel pellentesque est. Pellentesque elit urna, efficitur vitae cursus non, semper sit amet erat. Donec pulvinar consequat sapien condimentum ornare.',
loveIts: 5,
createAt: new Date()
}
];
}
