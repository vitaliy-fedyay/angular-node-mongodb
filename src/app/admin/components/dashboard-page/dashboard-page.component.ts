import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostAdminService } from '../../services/post-admin.service';
import { Post } from '../../model/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  public postSubscription: Subscription;
  public dataSource: MatTableDataSource<Post>;
  public displayedColumns: string[] = ['id', 'title', 'author', 'date', 'button'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private postAdminService: PostAdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts(): void {
    this.postSubscription = this.postAdminService.getAllPost()
      .subscribe(
        (data: Post[]) => {
          this.posts = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openPost(id: string): void {
    this.router.navigate(['/admin/edit'], { queryParams: { id } });
  }

  public deletePost(id: any): void {
    this.postAdminService.deletePost(id).subscribe((data) => {
      this.getAllPosts();
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
