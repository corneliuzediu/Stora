import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [TabMenuModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
            {
                label: 'Storage',
                icon: 'pi pi-box',
                routerLink: 'storage',
            },
            { label: 'Shopping', icon: 'pi pi-list', routerLink: 'shopping' },
            { label: 'Sort', icon: 'pi pi-sort', routerLink: 'sort' },
        ];
    }
}
