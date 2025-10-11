# PaginationComponent

The `PaginationComponent` provides a reusable, standalone Angular pagination bar that works with any data source. It supports both item-count-driven pagination (via `totalItems` + `pageSize`) and precomputed total page counts (`totalPages`). The component exposes events for page and page size changes so parent components stay in control of fetching data.

## Key Features

- Ellipsis-based page range condensation to keep the control compact on long result sets
- Optional boundary (`&laquo;`, `&raquo;`) and direction (`&lsaquo;`, `&rsaquo;`) navigation buttons
- Optional page size selector with customizable options
- Disabled state support for loading or read-only scenarios
- Accessible markup using semantic `nav`, ARIA labels, and `aria-current` on the active page

## Inputs

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `page` | `number` | `1` | Current 1-based page index. |
| `pageSize` | `number` | `10` | Number of items per page. Used to derive total pages when `totalItems` is provided. |
| `totalItems` | `number \| undefined` | `undefined` | Total number of items available. Combine with `pageSize` to compute total pages dynamically. |
| `totalPages` | `number \| undefined` | `undefined` | Explicit total page count. Overrides `totalItems` when provided. |
| `maxVisiblePages` | `number` | `7` | Maximum number of page buttons to display, including first and last pages. |
| `boundaryLinks` | `boolean` | `true` | Show or hide first (`&laquo;`) and last (`&raquo;`) page buttons. |
| `directionLinks` | `boolean` | `true` | Show or hide previous (`&lsaquo;`) and next (`&rsaquo;`) page buttons. |
| `showPageSizeSelect` | `boolean` | `false` | Display a page-size dropdown. |
| `pageSizeOptions` | `number[]` | `[10, 25, 50, 100]` | Options for the page-size dropdown. Invalid values are ignored. The current `pageSize` is always included automatically. |
| `disabled` | `boolean` | `false` | Disables all buttons and the page-size selector. Useful while data is loading. |

## Outputs

| Output | Payload | Description |
| --- | --- | --- |
| `pageChange` | `number` | Emits the target page whenever a navigation button is used. Parent components should update their state and refresh data accordingly. |
| `pageSizeChange` | `number` | Emits when the user picks a different page size. Update `pageSize` and reload data in response. |

## Basic Usage

```ts
import { Component, signal } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, AsyncPipe, PaginationComponent],
  template: `
    <ng-container *ngIf="products() as items">
      <app-product-card *ngFor="let product of items"></app-product-card>

      <app-pagination
        [page]="page()"
        [pageSize]="pageSize()"
        [totalItems]="totalItems()"
        [showPageSizeSelect]="true"
        (pageChange)="onPageChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
      ></app-pagination>
    </ng-container>
  `,
})
export class ProductListComponent {
  page = signal(1);
  pageSize = signal(10);
  totalItems = signal(0);
  products = signal([]);

  onPageChange(nextPage: number): void {
    this.page.set(nextPage);
    this.fetchProducts();
  }

  onPageSizeChange(nextSize: number): void {
    this.pageSize.set(nextSize);
    this.page.set(1);
    this.fetchProducts();
  }

  private fetchProducts(): void {
    // Call your data service with this.page(), this.pageSize(), update products & totalItems
  }
}
```

### Without `totalItems`

When you already know the total number of pages (for example, if it comes from an API), skip `totalItems`:

```html
<app-pagination
  [page]="page"
  [pageSize]="pageSize"
  [totalPages]="apiResponse.totalPages"
  (pageChange)="loadPage($event)"
></app-pagination>
```

## Styling Notes

The component ships with default styles in `pagination.component.css`. If you want to customize them, you can:

1. Override the provided CSS classes in a global stylesheet.
2. Wrap the component in a host element and use the deep selector (`:host ::ng-deep`) if you need to adjust styles from a parent component.

Class names you can target:

- `.pagination` - container wrapper
- `.pagination__list` - unordered list holding the page buttons
- `.pagination__button` - individual button styles
- `.pagination__ellipsis` - ellipsis placeholder
- `.pagination__size-*` - elements for the page-size selector

## Method Reference

- `ngOnChanges(changes: SimpleChanges)` — re-syncs internal state whenever an input changes (`page`, `pageSize`, `totalItems`, etc.); rebuilds the page list, clamps the current page, and normalizes page-size options.
- `goToFirst()` — navigates to the first page when controls are enabled.
- `goToPrevious()` — steps back one page when a previous page is available.
- `goToPage(entry: PaginationEntry)` — activates a specific page button; ignores ellipsis entries and emits a change only for valid page numbers.
- `goToNext()` — advances one page when a next page exists.
- `goToLast()` — jumps straight to the final page if navigation is allowed.
- `onPageSizeChange(size: string)` — converts the `<select>` value to a number, rejects invalid or unchanged values, and emits `pageSizeChange`.
- `isEllipsis(entry: PaginationEntry)` — guards template logic by identifying ellipsis placeholders in the page array.
- `updateState()` — core recalculation routine that determines total pages, clamps the current page, refreshes the page array, and recomputes normalized page-size options.
- `emitPageChange(page: number)` — updates `currentPage`, regenerates the page array, and emits `pageChange` whenever the target differs from the current page.
- `canNavigateTo(page: number)` — validates that navigation is enabled and the requested page lies within the `[1, totalPages]` range.
- `normalizePageSizeOptions()` — deduplicates and sorts the configured page-size options, always including the active `pageSize`.
- `resolveTotalPages()` — resolves the page count by preferring `totalPages` and falling back to `totalItems / pageSize`.
- `clampPage(page: number, totalPages: number)` — ensures the current page stays within bounds and defaults to `1` for invalid values.
- `buildPages(totalPages: number, currentPage: number, maxVisible: number)` — produces the sequence of visible page entries, inserting ellipses when sections of pages are skipped.

## Tips

- Provide `maxVisiblePages` to keep the control compact on small screens. A value between 5 and 7 works well in most layouts.
- Use the `disabled` input while awaiting API responses to prevent duplicate fetches.
- Reset `page` to `1` whenever you change the filters or page size so the user sees fresh results from the first page.
