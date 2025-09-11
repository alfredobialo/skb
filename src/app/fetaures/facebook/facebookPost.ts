import {Component, computed, signal} from '@angular/core';

@Component({
  standalone: true,
  selector: 'facebook-post, FacebookPost',
  template: `
    <div class="d-flex flex-column justify-content-between p-4" style="width :400px; min-height: 500px;">
      <div class="content " style="">
        <h3>Henry Adamba</h3>
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ad deserunt ea ex expedita fuga numquam
            odit reprehenderit suscipit totam voluptatem!
            Dolor esse ex, exercitationem fuga iure nesciunt
            nobis pariatur quia.
          </div>
          <div>Animi assumenda culpa doloribus earum,
            enim eveniet fugit harum impedit incidunt ipsam
            iure iusto laudantium libero magnam maiores
            mollitia natus nostrum omnis possimus qui quo quod sequi tempora ut veritatis?
          </div>
          <div class="bg-light-subtle border border-0 mt-2 p-3 d-flex justify-content-around align-items-center">
            <p class="text-primary">{{ likesTag() }} </p>
            <p class="text-danger">{{ dislikesTag() }}</p>
            <p class="text-muted align-self-end">{{ comments() }} Comments</p>
          </div>
        </div>
      </div>
      <div class="content mt-4 d-flex justify-content-between">
        <button class="btn  " [class]="{'btn-outline-primary': !postLiked, 'btn-primary' : postLiked }" (click)="handleLikingOfPost()">Like</button>
        <button class="btn btn-outline-danger " (click)="dislikePost()">Dislike</button>
        <button class="btn btn-dark " (click)="comments.set(5)">Comment</button>
      </div>
    </div>`
})
export class FacebookPost {

  postLiked = false;

  likes =  signal(0);
  dislikes = signal(0);
  comments = signal(0);

  likesTag = computed(() => {
    const like = this.likes();
    let result = `${like} Likes`;
    if(like === 1){
      result = `${like} Like`;
    }
    return result;
  });

  dislikesTag = computed(() => {
    const dislike = this.dislikes();
    let result = `${dislike} Dislikes`;
    if(dislike <= 1){
      result = `${dislike} Dislike`;
    }
    return result;
  });
  likePost(){
    /*
    * Layman's 'Like a Post' Feature:
    * check if the user has disliked the post:
    * YES =>  reduce the dislike count
    * NO =>  Do nothing
    * */
    if(this.dislikes() > 0) {
      this.dislikes.set(0);
    }
    this.likes.update((x) => x + 1);
  }
  dislikePost(){
    /*
    * check if the user has liked the post:
    * YES =>  reduce the like count
    * NO =>  Do nothing
    * */
    if(this.likes() > 0){
      this.likes.set(0);
    }
    this.dislikes.update((x) => x + 1);
  }

  removeLike(){
    // reset like or undo like action that was previously initiated
    this.likes.set(0);
  }
  removeDislike(){
    // reset like or undo like action that was previously initiated
    this.dislikes.set(0);
  }

  handleLikingOfPost(){
    if(this.postLiked === false){
      this.likePost();
      this.postLiked = true;
    }
    else{
      this.removeLike();
      this.postLiked = false;
    }
  }
}
