class MainComponent {
    constructor(template, containerEl) {
        this.template = template;
        this.containerEl = containerEl;
    }

    init() {
        this.containerEl.innerHTML = this.template;
    }
}