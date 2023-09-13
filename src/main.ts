import { Subject, interval, from, tap, mergeAll } from 'rxjs';
// import { ajax } from 'rxjs/ajax'

function main() {
  // const postApiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  // const commentApiUrl = 'https://jsonplaceholder.typicode.com/comments'

  const apiCallBtn = document.querySelector<HTMLButtonElement>('#apiBtn');
  const stopBtn = document.querySelector<HTMLButtonElement>('#stopBtn');

  const $sub = new Subject<number>();
  const $source = interval(1000);

  // const getHand = (data: any) => $sub.pipe(map(hand => `hand: ${hand} : data: ${data}`));


  const exp = from([
    $source,
    $sub
  ]).pipe(
    mergeAll(),
    tap((x) => console.log('x:', x))
  );
  const sub = exp.subscribe(x => console.log(x));

  if (stopBtn) {
    stopBtn.onclick = function() {
      sub.unsubscribe();
    };
  }

  
  if (apiCallBtn) {
    let i = 0;
    apiCallBtn.onclick = function() {
      $sub.next(i);
      i++;
    };
  }
}

main();
// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
