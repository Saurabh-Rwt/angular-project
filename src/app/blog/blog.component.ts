import { Component, OnInit } from '@angular/core';
import { myBlogs } from '../appService/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any;

  ngOnInit() {
    const blogsService = new myBlogs();
    this.blogs = blogsService.blog;
  }

  getData(item: any) {
    console.log(item.slug);
  }
}