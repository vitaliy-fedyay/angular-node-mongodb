import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/admin/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public posts$: Observable<Post>;
  public posts;
  public query: string;
  public dataSource: MatTableDataSource<Post>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPost();
    this.posts = this.postService.getAllPost().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

  }

}
