import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

type PaginationEntry = number | 'ellipsis';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() totalItems?: number;
  @Input() totalPages?: number;
  @Input() maxVisiblePages = 7;
  @Input() boundaryLinks = true;
  @Input() directionLinks = true;
  @Input() showPageSizeSelect = false;
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];
  @Input() disabled = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  public currentPage = 1;
  public totalPagesInternal = 0;
  public pages: PaginationEntry[] = [];
  public normalizedPageSizeOptions: number[] = [];

  private static readonly ELLIPSIS: PaginationEntry = 'ellipsis';

  ngOnChanges(_: SimpleChanges): void {
    this.updateState();
  }

  goToFirst(): void {
    if (this.canNavigateTo(1)) {
      this.emitPageChange(1);
    }
  }

  goToPrevious(): void {
    if (this.canNavigateTo(this.currentPage - 1)) {
      this.emitPageChange(this.currentPage - 1);
    }
  }

  goToPage(entry: PaginationEntry): void {
    if (this.isEllipsis(entry)) {
      return;
    }

    const targetPage = entry;
    if (this.canNavigateTo(targetPage)) {
      this.emitPageChange(targetPage);
    }
  }

  goToNext(): void {
    if (this.canNavigateTo(this.currentPage + 1)) {
      this.emitPageChange(this.currentPage + 1);
    }
  }

  goToLast(): void {
    if (this.canNavigateTo(this.totalPagesInternal)) {
      this.emitPageChange(this.totalPagesInternal);
    }
  }

  onPageSizeChange(size: string): void {
    if (this.disabled) {
      return;
    }

    const parsedSize = Number(size);
    if (Number.isFinite(parsedSize) && parsedSize > 0 && parsedSize !== this.pageSize) {
      this.pageSizeChange.emit(parsedSize);
    }
  }

  isEllipsis(entry: PaginationEntry): entry is 'ellipsis' {
    return entry === PaginationComponent.ELLIPSIS;
  }

  private updateState(): void {
    const totalPages = this.resolveTotalPages();
    this.totalPagesInternal = totalPages;
    this.currentPage = totalPages > 0 ? this.clampPage(this.page, totalPages) : 1;
    this.pages = totalPages > 1 ? this.buildPages(totalPages, this.currentPage, this.maxVisiblePages) : [1];
    this.normalizedPageSizeOptions = this.normalizePageSizeOptions();
  }

  private emitPageChange(page: number): void {
    if (page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    this.pages = this.totalPagesInternal > 1 ? this.buildPages(this.totalPagesInternal, this.currentPage, this.maxVisiblePages) : [1];
    this.pageChange.emit(page);
  }

  private canNavigateTo(page: number): boolean {
    return !this.disabled && page >= 1 && page <= this.totalPagesInternal;
  }

  private normalizePageSizeOptions(): number[] {
    const uniqueOptions = new Set<number>();
    for (const option of this.pageSizeOptions ?? []) {
      if (Number.isFinite(option) && option > 0) {
        uniqueOptions.add(Math.trunc(option));
      }
    }
    if (this.pageSize > 0) {
      uniqueOptions.add(Math.trunc(this.pageSize));
    }

    return Array.from(uniqueOptions).sort((a, b) => a - b);
  }

  private resolveTotalPages(): number {
    if (this.totalPages && this.totalPages > 0) {
      return Math.trunc(this.totalPages);
    }

    if (this.pageSize > 0 && this.totalItems !== undefined) {
      const computed = Math.ceil(this.totalItems / this.pageSize);
      return Math.max(computed, 1);
    }

    return 0;
  }

  private clampPage(page: number, totalPages: number): number {
    if (!Number.isFinite(page) || page < 1) {
      return 1;
    }

    if (page > totalPages) {
      return totalPages;
    }

    return Math.trunc(page);
  }

  private buildPages(totalPages: number, currentPage: number, maxVisible: number): PaginationEntry[] {
    const maxSlots = Math.max(Math.trunc(maxVisible) || 0, 1);

    if (totalPages <= maxSlots) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: PaginationEntry[] = [];
    const visibleMiddleSlots = Math.max(maxSlots - 2, 0);

    pages.push(1);

    if (visibleMiddleSlots === 0) {
      pages.push(PaginationComponent.ELLIPSIS);
      pages.push(totalPages);
      return pages;
    }

    let start = currentPage - Math.floor(visibleMiddleSlots / 2);
    let end = currentPage + Math.floor((visibleMiddleSlots - 1) / 2);

    if (start < 2) {
      start = 2;
      end = start + visibleMiddleSlots - 1;
    }

    if (end > totalPages - 1) {
      end = totalPages - 1;
      start = end - visibleMiddleSlots + 1;
    }

    if (start > 2) {
      pages.push(PaginationComponent.ELLIPSIS);
    }

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (end < totalPages - 1) {
      pages.push(PaginationComponent.ELLIPSIS);
    }

    pages.push(totalPages);
    return pages;
  }
}
