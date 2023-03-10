export abstract class OffCanvaBaseComponent {
    public removeBodyOverflowHidden() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
}