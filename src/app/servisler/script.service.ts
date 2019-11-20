import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  constructor() {}

  headScriptEkle(scriptYol: string): Promise<any> {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptYol;
      script.setAttribute('data-path', scriptYol);

      // IE
      // @ts-ignore
      if (script.readyState) {
        // @ts-ignore
        script.onreadystatechange = () => {
          // @ts-ignore
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            // @ts-ignore
            script.onreadystatechange = null;
            resolve({ loaded: true, status: 'Loaded' });
          }
        };
      } else {
        script.onload = () => {
          resolve({ loaded: true, status: 'Loaded' });
        };
      }

      script.onerror = (error: any) => resolve({ loaded: false, status: 'Loaded' });
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  headScriptSil(scriptYol: Array<string>) {
    scriptYol.map((value, index) => {
      const element = document.querySelector(`script[data-path=${value}]`);
      if (element) {
        element.remove();
      }
    });
  }
}
