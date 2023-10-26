import { Component, OnInit } from '@angular/core';
import { myBlogs } from '../appService/blogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any | undefined;
  slug: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [key: string]: any }) => {
      this.slug = params['blog'];
      if (this.slug) {
        this.getBlogBySlug(this.slug);
      }
    });
  }

  getBlogBySlug(slug: string) {
    const blogsService = new myBlogs();
    this.blog = blogsService.blog.find((item: any) => item.slug === slug);
  }
}