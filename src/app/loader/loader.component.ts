import { Component, inject } from '@angular/core';
import { LoadingService } from '../Service/loading.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  loadingService = inject(LoadingService);
  isLoading$ = this.loadingService.isLoading$;
}
