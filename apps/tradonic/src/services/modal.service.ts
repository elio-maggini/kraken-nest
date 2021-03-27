import { Injectable } from '@angular/core';
import { defer, Observable, ObservableInput, of, throwError, zip } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { catchError, finalize, mergeMap } from 'rxjs/operators';

type LoadingCallback<T> = () => Observable<T>;

@Injectable()
export class ModalService {

  constructor(
    private loading: LoadingController,
  ) {}

  createLoad<T>(callback: LoadingCallback<T>, options?: {} ): Observable<T> {
    const defaultOptions = {
      message: 'Loading...',
    };

    const createModal = (): ObservableInput<HTMLIonLoadingElement> => {
      return this.loading.create({
        ...defaultOptions,
        ...(options ?? {})
      }).then((modal) =>
        modal.present().then(() => modal)
      );
    };

    const onCatch = (error: Error): ObservableInput<Error> => {
      return of(error);
    };

    const onSubscribe = (): ObservableInput<[HTMLIonLoadingElement, T]> => {
      return zip(createModal(), callback().pipe(catchError(onCatch)));
    };

    const onComplete = ([modal, result]: [HTMLIonLoadingElement, T]): Observable<T> => {
      const next = result instanceof Error ? throwError(result) : of(result);
      return next.pipe(finalize(() => modal.dismiss()));
    }

    return defer(onSubscribe).pipe(mergeMap(onComplete));
  }


}
