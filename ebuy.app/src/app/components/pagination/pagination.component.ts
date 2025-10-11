import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems = 0;

  @Input() pageSize = 12;

  @Input() currentPage = 1;

  @Input() maxPagesToShow = 5;

  @Output()
  pageChange = new EventEmitter<number>();

  public pages: number[] = [];
  public totalPages = 0;

  ngOnChanges(_changes: SimpleChanges): void {
    this.pageSize = Math.max(1, Math.floor(this.pageSize));
    this.totalPages = this.pageSize > 0 ? Math.ceil(this.totalItems / this.pageSize) : 0;

    if (this.totalPages === 0) {
      this.currentPage = 1;
      this.pages = [];
      return;
    }

    this.currentPage = this.clampPage(this.currentPage);
    this.pages = this.buildPages();
  }

  public goToPrevious(): void {
    this.goTo(this.currentPage - 1);
  }

  public goToNext(): void {
    this.goTo(this.currentPage + 1);
  }

  public goTo(page: number): void {
    const normalizedPage = this.clampPage(page);

    if (normalizedPage === this.currentPage) {
      return;
    }

    this.currentPage = normalizedPage;
    this.pages = this.buildPages();
    this.pageChange.emit(this.currentPage);
  }

  private clampPage(page: number): number {
    if (this.totalPages === 0) {
      return 1;
    }

    const minPage = 1;
    const maxPage = this.totalPages;
    const parsedPage = Number.isFinite(page) ? Math.trunc(page) : minPage;

    return Math.min(Math.max(parsedPage, minPage), maxPage);
  }

  private buildPages(): number[] {
    if (this.totalPages <= 0) {
      return [];
    }

    const visiblePages = Math.max(1, Math.floor(this.maxPagesToShow));

    if (this.totalPages <= visiblePages) {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    const halfWindow = Math.floor(visiblePages / 2);
    let start = this.currentPage - halfWindow;
    let end = this.currentPage + halfWindow;

    if (visiblePages % 2 === 0) {
      end -= 1;
    }

    if (start < 1) {
      start = 1;
      end = start + visiblePages - 1;
    }

    if (end > this.totalPages) {
      end = this.totalPages;
      start = end - visiblePages + 1;
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
}
